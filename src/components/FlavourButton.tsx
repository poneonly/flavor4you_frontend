'use client';

import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export type FlavourButtonKind = 'primary' | 'secondary';

export interface FlavourButtonProps extends Omit<ButtonProps, 'variant' | 'color'> {
  kind?: FlavourButtonKind;
  children: React.ReactNode;
}

export default function FlavourButton({
  kind = 'primary',
  children,
  sx,
  size = 'large',
  ...rest
}: FlavourButtonProps) {
  const isPrimary = kind === 'primary';

  return (
    <Button
      variant={isPrimary ? 'contained' : 'outlined'}
      color="inherit"
      size={size}
      sx={{
        textTransform: 'none',
        ...(isPrimary
          ? {
              backgroundColor: 'var(--color-primary)',
              color: '#fff',
              border: '1px solid var(--color-primary)',
              '&:hover': {
                backgroundColor: 'var(--color-primary)',
                opacity: 0.9,
                border: '1px solid var(--color-primary)',
              },
            }
          : {
              backgroundColor: '#fff',
              color: 'var(--color-primary)',
              border: '1px solid var(--color-primary)',
              '&:hover': {
                backgroundColor: '#fff',
                border: '1px solid var(--color-primary)',
                opacity: 0.9,
              },
            }),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
