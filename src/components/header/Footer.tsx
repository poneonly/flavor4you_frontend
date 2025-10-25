'use client';

import * as React from 'react';
import Image from 'next/image';
import { Box, Stack, Typography, Link as MLink } from '@mui/material';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f5f5f5' }}>
      <Box
        sx={{
          p: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 2fr 2fr' },
            gap: { xs: 3, md: 4 },
            textAlign: 'left',
            alignItems: 'start',
          }}
        >
          {/* Logo */}
          <Box sx={{ minWidth: 0 }}>
            <Stack spacing={1.5} alignItems="flex-start">
              <Image src="/logo.svg" alt="Flavour4You" width={100} height={40} priority />
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0, mb: 0 }}
              >
                The best recipe website in every food lover&apos;s dream.
              </Typography>
            </Stack>
          </Box>

          {/* General Information */}
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              You need help?
            </Typography>

            <Stack spacing={1.2} sx={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <MapPin size={18} />
                <Typography color="text.primary">
                  15 Tran Bach Dang Street, An Khanh Ward, Ho Chi Minh City, Vietnam
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Mail size={18} />
                <MLink href="mailto:support@flavour4you.com" underline="hover">
                  support@flavour4you.com
                </MLink>
              </Stack>
            </Stack>
          </Box>

          {/* Support Team */}
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Support Team
            </Typography>

            <Stack spacing={1.2} sx={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
              {[
                'yenthong@support.flavour4you.com',
                'ngocnhan@support.flavour4you.com',
                'thuckhue@support.flavour4you.com',
                'hongphuong@support.flavour4you.com',
              ].map((email) => (
                <MLink key={email} href={`mailto:${email}`} underline="hover" color="text.primary">
                  {email}
                </MLink>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
