'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import RecipePreview from '@components/RecipePreview';
import { Recipe } from '@/types/recipe';

type RecipesListProps = {
  recipesData: Recipe[];
};

export default function RecipesList({ recipesData }: RecipesListProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr',
          md: '1fr 1fr 1fr 1fr',
        },
        justifyItems: 'start',
      }}
    >
      {recipesData.map((recipe, index) => (
        <RecipePreview key={index} recipe={recipe} />
      ))}
    </Box>
  );
}
