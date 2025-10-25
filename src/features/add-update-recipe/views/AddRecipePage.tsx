'use client';

import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import MainLayout from '@layouts/ContainerLayout';
import Form from '../form-components/Form';

type Recipe = {
  id: string | number;
  image: string;
  title: string;
  description: string;
  cookingTime: number;
  servings: number;
  views: number;
  rating: number;
  author: string;
  categories: string[];
};

export default function AddRecipe() {
  return (
    <MainLayout>
      {/* Banner */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 200, md: 300 },
          backgroundImage:
            'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80)',
          bgcolor: 'rgba(255,255,255,0.5)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mb: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />

      {/* Title and subtitle */}
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ color: 'var(--color-primary)' }}
        >
          Create Your Recipe
        </Typography>
        <Typography variant="subtitle1" color="black">
          Share your culinary masterpiece with the world
        </Typography>
      </Box>

      {/* Add Recipe Form */}
      <Form />
    </MainLayout>
  );
}
