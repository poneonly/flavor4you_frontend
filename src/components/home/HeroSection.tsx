'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { Search, ChefHat, Heart } from 'lucide-react';
import { CREATE_NEW_RECIPE_PATH } from 'const/path';

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #F8B25B 0%, #FDD25B 100%)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, sm: 12, md: 18 },
        pb: { xs: 6, sm: 10, md: 15 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', color: 'white', zIndex: 2, position: 'relative' }}>
          {/* Heading */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3.6rem', lg: '5rem' },
              lineHeight: 1.1,
              fontWeight: 'bold',
              mb: { xs: 2, md: 3 },
              fontFamily: 'var(--font-playfair)',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Share Your
            <br />
            <Box
              component="span"
              sx={{ color: '#fff', position: 'relative', display: 'inline-block' }}
            >
              Flavor
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: -4, sm: 4, md: 10 },
                  right: { xs: -28, sm: -36, md: -50 },
                  '& svg': {
                    width: { xs: 26, sm: 32, md: 40 },
                    height: { xs: 26, sm: 32, md: 40 },
                    fill: 'white',
                    color: 'white',
                  },
                }}
              >
                <Heart />
              </Box>
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            sx={{
              mb: { xs: 3, md: 4 },
              fontFamily: 'var(--font-manrope)',
              opacity: 0.9,
              maxWidth: { xs: '90%', md: 600 },
              mx: 'auto',
              fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' },
            }}
          >
            Discover, create, and share amazing recipes with food lovers around the world. Your
            culinary journey starts here!
          </Typography>

          {/* Actions */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: { xs: 1.5, md: 2 },
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              mb: { xs: 3, md: 4 },
            }}
          >
            <Button
              component={Link}
              href="/recipes"
              variant="contained"
              sx={{
                bgcolor: 'white',
                color: 'var(--color-primary)',
                px: { xs: 2.4, sm: 3, md: 4 },
                py: { xs: 0.9, sm: 1.2, md: 1.5 },
                borderRadius: { xs: 2, md: 3 },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: { xs: '0 2px 12px rgba(0,0,0,0.08)', md: '0 4px 20px rgba(0,0,0,0.1)' },
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#f8f9fa',
                  transform: { xs: 'none', sm: 'translateY(-1px)', md: 'translateY(-2px)' },
                  boxShadow: {
                    xs: '0 3px 14px rgba(0,0,0,0.12)',
                    md: '0 6px 25px rgba(0,0,0,0.15)',
                  },
                },
                '& .MuiButton-startIcon svg': {
                  width: { xs: 18, sm: 19, md: 20 },
                  height: { xs: 18, sm: 19, md: 20 },
                },
                width: 'auto',
                whiteSpace: 'nowrap',
              }}
              startIcon={<Search size={20} />}
            >
              Explore Recipes
            </Button>

            <Button
              component={Link}
              href={CREATE_NEW_RECIPE_PATH}
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                px: { xs: 2.4, sm: 3, md: 4 },
                py: { xs: 0.9, sm: 1.2, md: 1.5 },
                borderRadius: { xs: 2, md: 3 },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                fontWeight: 600,
                textTransform: 'none',
                borderWidth: { xs: 1.5, md: 2 },
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)',
                  borderColor: 'white',
                  transform: { xs: 'none', sm: 'translateY(-1px)', md: 'translateY(-2px)' },
                },
                '& .MuiButton-startIcon svg': {
                  width: { xs: 18, sm: 19, md: 20 },
                  height: { xs: 18, sm: 19, md: 20 },
                },
                width: 'auto',
                whiteSpace: 'nowrap',
              }}
              startIcon={<ChefHat size={20} />}
            >
              Create Recipe
            </Button>
          </Box>

          {/* Stats */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              flexWrap: 'wrap',
              opacity: 0.9,
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', mb: 1, fontFamily: 'var(--font-playfair)' }}
              >
                10K+
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'var(--font-manrope)' }}>
                Recipes Shared
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', mb: 1, fontFamily: 'var(--font-playfair)' }}
              >
                5K+
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'var(--font-manrope)' }}>
                Home Chefs
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', mb: 1, fontFamily: 'var(--font-playfair)' }}
              >
                50+
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'var(--font-manrope)' }}>
                Categories
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          opacity: 0.1,
          transform: 'rotate(15deg)',
        }}
      >
        <ChefHat size={120} color="white" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '8%',
          opacity: 0.1,
          transform: 'rotate(-20deg)',
        }}
      >
        <Heart size={80} color="white" />
      </Box>
    </Box>
  );
};

export default HeroSection;
