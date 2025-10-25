'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import type { SubCategory, Category, RawCategory, CategoryBarProps } from '@/types/category';
import { keyframes } from '@mui/system';
import CategoryItem from './CategoryItem';

export default function CategoryBar({ isScrolled }: CategoryBarProps) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [categories, setCategories] = React.useState<Category[]>([]);

  // Fetch categories
  React.useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('/categories.json');
        const data: RawCategory[] = await res.json();

        const grouped: Record<string, SubCategory[]> = {};
        data.forEach((item) => {
          if (!grouped[item.id]) grouped[item.id] = [];
          grouped[item.id].push({
            label: item.name,
            href: `/recipes?category=${encodeURIComponent(item.name)}`,
          });
        });

        const catArray: Category[] = Object.entries(grouped).map(([title, items]) => ({
          title,
          items,
        }));

        catArray.push({ title: 'About Us', items: [], href: '/about' } as any);

        setCategories(catArray);
      } catch (err) {
        console.error('Failed to load categories.json', err);
      }
    }
    fetchCategories();
  }, []);

  // Mobile state
  const [mobileMenu, setMobileMenu] = React.useState<null | HTMLElement>(null);
  const [showSubMenu, setShowSubMenu] = React.useState(false);
  const [subItems, setSubItems] = React.useState<SubCategory[]>([]);
  const [subTitle, setSubTitle] = React.useState<string>('');
  const mobileOpen = Boolean(mobileMenu);

  const openMobile = (e: React.MouseEvent<HTMLElement>) => setMobileMenu(e.currentTarget);
  const closeMobile = () => {
    setMobileMenu(null);
    setShowSubMenu(false);
  };

  const openSubMenu = (title: string, items: SubCategory[]) => {
    setSubTitle(title);
    setSubItems(items);
    setShowSubMenu(true);
  };

  // Animation
  const bounce = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  `;

  return (
    <Box
      sx={{
        width: '100%',
        borderBottom: isScrolled ? `1px solid var(--color-primary)` : 'none',
        bgcolor: isScrolled ? theme.palette.background.paper : 'transparent',
      }}
    >
      {isMdUp ? (
        <Box
          sx={{
            mx: 'auto',
            px: { xs: 1, sm: 2, md: 4 },
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: { xs: 0.5, sm: 1.5, md: 3 },
            whiteSpace: 'nowrap',
          }}
        >
          {categories.map((item) => (
            <CategoryItem
              key={item.title}
              title={item.title}
              href={(item as any).href}
              items={item.items}
              isScrolled={isScrolled}
            />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            maxWidth: 1280,
            mx: 'auto',
            px: { xs: 1, sm: 2, md: 4 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            aria-label="open categories"
            onClick={openMobile}
            disableRipple
            sx={{
              p: { xs: 0.5, sm: 0.8, md: 1 },
              alignItems: 'center',
              '&:hover .arrow': { transform: 'translateY(-2px)' },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: isScrolled ? 'var(--color-primary)' : '#fff',
                fontWeight: 600,
                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                letterSpacing: { xs: 0.2, sm: 0.3, md: 0.5 },
              }}
            >
              Explore by
            </Typography>

            <KeyboardArrowDownRoundedIcon
              className="arrow"
              sx={{
                color: isScrolled ? 'var(--color-primary)' : '#fff',
                animation: `${bounce} 1.1s ease-in-out infinite`,
                transition: 'transform .2s',
                '@media (prefers-reduced-motion: reduce)': {
                  animation: 'none',
                },
              }}
            />
          </IconButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={mobileMenu}
            open={mobileOpen}
            onClose={closeMobile}
            disableScrollLock
            sx={{
              '& .MuiPaper-root': { width: 280 },
            }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            {!showSubMenu ? (
              categories.map((c) => {
                const hasSub = (c.items?.length ?? 0) > 0;

                return (
                  <MenuItem
                    key={c.title}
                    component={hasSub ? 'div' : Link}
                    href={hasSub ? undefined : (c as any).href}
                    onClick={
                      hasSub
                        ? () => {
                            openSubMenu(c.title, c.items || []);
                          }
                        : () => closeMobile()
                    }
                    sx={{
                      py: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <ListItemText>{c.title}</ListItemText>

                    {hasSub && (
                      <IconButton edge="end" size="small">
                        <ChevronRightIcon fontSize="small" sx={{ color: 'var(--color-primary)' }} />
                      </IconButton>
                    )}
                  </MenuItem>
                );
              })
            ) : (
              <>
                <MenuItem
                  onClick={() => setShowSubMenu(false)}
                  sx={{
                    py: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: 'var(--color-primary)', fontWeight: 600 }}
                  >
                    ← Back to {subTitle}
                  </Typography>
                </MenuItem>
                {subItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    component={Link}
                    href={item.href}
                    onClick={closeMobile}
                    sx={{ py: 1 }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </>
            )}
          </Menu>
        </Box>
      )}
    </Box>
  );
}
