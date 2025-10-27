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
  ingredients?: string[];
  steps?: string[];
  difficulty?: string;
};

const MOCK_RECIPE: Recipe = {
  id: 'rx-1024',
  image:
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80',
  title: 'Classic Pancakes',
  description: 'Fluffy classic pancakes with butter and maple syrup. Perfect for a cozy breakfast.',
  cookingTime: 20,
  servings: 4,
  views: 1234,
  rating: 4.6,
  author: 'Jamie Oliver',
  categories: ['Breakfast', 'Baking'],
  ingredients: [
    '2 cups flour',
    '2 eggs',
    '1½ cups milk',
    '1 tbsp sugar',
    '1 tsp baking powder',
    'Pinch of salt',
    'Butter for pan',
  ],
  steps: [
    'Whisk dry ingredients together in a bowl.',
    'Add eggs and milk; whisk until smooth.',
    'Heat a non-stick pan with a little butter.',
    'Pour batter; cook until bubbles form, flip and finish.',
    'Serve warm with maple syrup and butter.',
  ],
  difficulty: 'easy',
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
