'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Divider,
  useMediaQuery,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { CREATE_NEW_RECIPE_PATH, LOGIN_PATH } from 'const/path';
import SearchBar from './SearchBar';
import { Recipe } from '@/types/recipe';

type NavBarProps = {
  onThemeChange?: (mode: string) => void;
  isScrolled?: boolean;
};

export default function NavBar({ onThemeChange, isScrolled }: NavBarProps) {
  const router = useRouter();

  // Load recipes.json từ public
  const [recipesData, setRecipesData] = React.useState<Recipe[]>([]);
  React.useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch('/recipes.json');
        if (!res.ok) throw new Error('Failed to load recipes.json');
        const data: Recipe[] = await res.json();
        setRecipesData(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRecipes();
  }, []);

  // Theme state
  const themeList = ['Light Mode', 'Dark Mode'];
  const [themeMenu, setThemeMenu] = React.useState<null | HTMLElement>(null);
  const [selectedTheme, setSelectedTheme] = React.useState('Light Mode');

  const openThemeMenu = (e: React.MouseEvent<HTMLElement>) => setThemeMenu(e.currentTarget);
  const closeThemeMenu = () => setThemeMenu(null);
  const handleTheme = (mode: string) => {
    setSelectedTheme(mode);
    onThemeChange?.(mode);
    closeThemeMenu();
  };

  // Mobile menu state
  const muiTheme = useTheme();
  const isMdUp = useMediaQuery(muiTheme.breakpoints.up('md'));
  const [mobileMenu, setMobileMenu] = React.useState<null | HTMLElement>(null);
  const openMobileMenu = (e: React.MouseEvent<HTMLElement>) => setMobileMenu(e.currentTarget);
  const closeMobileMenu = () => setMobileMenu(null);

  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{
        borderBottom: isScrolled ? (t) => `1px solid ${t.palette.divider}` : 'none',
        backgroundColor: isScrolled ? (t) => t.palette.background.paper : 'transparent',
      }}
    >
      <Toolbar
        sx={{
          gap: 2,
          minHeight: { xs: 56, sm: 64, md: 72 },
          px: { xs: 2, sm: 3, md: 4 },
          justifyContent: 'space-between',
        }}
      >
        {/* Left side: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: { xs: 45, sm: 60, md: 80 },
                height: { xs: 45, sm: 60, md: 80 },
                position: 'relative',
              }}
            >
              <Image
                src="/logo.svg" // đảm bảo ảnh nằm trong public/images/
                alt="Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
          </Link>
        </Box>
        {/* Middle: Search bar */}
        <Box
          sx={{
            flex: '0 0 50%',
            px: { xs: 1, sm: 2, md: 4 },
            minWidth: 0,
          }}
        >
          <SearchBar
            isScrolled={isScrolled}
            data={recipesData}
            onSelect={(recipe) => {
              router.push(`/recipes/${recipe.id}`);
            }}
          />
        </Box>

        {/* Right side */}
        {isMdUp ? (
          <Box
            sx={{
              display: 'flex',
              flex: '0 0 40%',
              justifyContent: 'flex-end',
              gap: 2,
              minWidth: { xs: 'auto', sm: 360 },
            }}
          >
            {/* Theme */}
            <Button
              onClick={openThemeMenu}
              endIcon={<ArrowDropDownIcon />}
              sx={{ textTransform: 'none', color: isScrolled ? '#333' : '#fff' }}
            >
              {selectedTheme}
            </Button>
            <Menu anchorEl={themeMenu} open={Boolean(themeMenu)} onClose={closeThemeMenu}>
              {themeList.map((mode) => (
                <MenuItem key={mode} onClick={() => handleTheme(mode)}>
                  {mode}
                </MenuItem>
              ))}
            </Menu>

            {/* Login & Create Recipe */}
            <Button
              component={Link}
              href={LOGIN_PATH}
              sx={{
                textTransform: 'none',
                color: isScrolled ? 'var(--color-primary)' : '#333',
                fontWeight: 600,
                backgroundColor: isScrolled ? 'transparent' : 'white',
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              href={CREATE_NEW_RECIPE_PATH}
              variant="text"
              sx={{
                textTransform: 'none',
                color: 'var(--color-primary)',
                fontWeight: 600,
                backgroundColor: isScrolled ? 'transparent' : 'white',
              }}
            >
              Create new recipe
            </Button>
          </Box>
        ) : (
          <section>
            <IconButton aria-label="open menu" onClick={openMobileMenu}>
              <MenuIcon sx={{ color: isScrolled ? '#333' : '#fff' }} />
            </IconButton>

            <Menu anchorEl={mobileMenu} open={Boolean(mobileMenu)} onClose={closeMobileMenu}>
              {/* Theme */}
              <MenuItem
                onClick={openThemeMenu}
                sx={{ display: 'flex', justifyContent: 'space-between', color: 'text.primary' }}
              >
                {selectedTheme}
                <ArrowDropDownIcon fontSize="small" />
              </MenuItem>

              <Menu anchorEl={themeMenu} open={Boolean(themeMenu)} onClose={closeThemeMenu}>
                {themeList.map((mode) => (
                  <MenuItem key={mode} onClick={() => handleTheme(mode)}>
                    {mode}
                  </MenuItem>
                ))}
              </Menu>

              <Divider />

              <MenuItem
                onClick={closeMobileMenu}
                component={Link}
                href={LOGIN_PATH}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                }}
              >
                Login
              </MenuItem>
              <MenuItem
                onClick={closeMobileMenu}
                component={Link}
                href={CREATE_NEW_RECIPE_PATH}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                }}
              >
                Create new recipe
              </MenuItem>
            </Menu>
          </section>
        )}
      </Toolbar>
    </AppBar>
  );
}
