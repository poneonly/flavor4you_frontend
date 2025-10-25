'use client';

import * as React from 'react';
import Link from 'next/link';
import { Box, ButtonBase, Menu, MenuItem, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import type { CategoryItemProps } from '@/types/category';

export default function CategoryItem({ title, href, items = [], isScrolled }: CategoryItemProps) {
  // Handle category menu
  const [categoryMenu, setCategoryMenu] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(categoryMenu);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setCategoryMenu(e.currentTarget);
  const handleClose = () => setCategoryMenu(null);

  // Handle rendering link
  if (!items.length && href) {
    return (
      <ButtonBase
        component={Link}
        href={href}
        disableRipple
        sx={{
          px: 0,
          py: 1.5,
          fontWeight: 600,
          textTransform: 'normal-case',
          color: isScrolled ? 'text.primary' : 'white',
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </ButtonBase>
    );
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <ButtonBase
        onClick={handleOpen}
        disableRipple
        sx={{
          px: 0,
          py: 1.5,
          fontWeight: 600,
          textTransform: 'normal-case',
          color: isScrolled ? 'text.primary' : 'white',
          whiteSpace: 'nowrap',
        }}
        aria-haspopup="menu"
        aria-expanded={openMenu ? 'true' : undefined}
        aria-controls={openMenu ? `${title}-menu` : undefined}
      >
        {title}
        {items.length > 0 && (
          <KeyboardArrowDownIcon
            sx={{
              color: isScrolled ? 'var(--color-primary)' : 'white',
              transition: 'transform .15s',
              transform: openMenu ? 'rotate(180deg)' : 'none',
            }}
          />
        )}
      </ButtonBase>

      {items.length > 0 && (
        <Menu
          id={`${title}-menu`}
          anchorEl={categoryMenu}
          open={openMenu}
          onClose={handleClose}
          disableScrollLock
          sx={{
            '& .MuiPaper-root': {
              width: 150,
              minWidth: 150,
              maxWidth: 250,
            },
          }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          {items.map((item) => (
            <MenuItem
              key={item.label}
              component={Link}
              href={item.href}
              onClick={handleClose}
              sx={{ py: 1 }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  );
}
