'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Rating,
} from '@mui/material';
import { Clock, Users, Eye } from 'lucide-react';
import { Recipe } from '@/types/recipe';

const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
  <Card
    component={Link}
    href={`/recipes/${recipe.id}`}
    sx={{
      maxWidth: 300,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 2,
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-6px) scale(1.02)',
        boxShadow: '0 16px 30px rgba(0,0,0,0.15)',
      },
    }}
  >
    <CardMedia
      component="img"
      image={recipe.recipeImages}
      alt={recipe.title}
      sx={{
        width: '100%',
        height: 200,
        objectFit: 'cover',
      }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Chip
        label={recipe.categories[0]}
        size="small"
        sx={{
          fontFamily: 'var(--font-manrope)',
          fontWeight: 600,
          mb: 1,
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'var(--font-playfair)',
          fontWeight: 'bold',
          mb: 1,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {recipe.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontFamily: 'var(--font-manrope)',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {recipe.description}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Clock size={16} /> {recipe.cookingTime}m
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Users size={16} /> {recipe.servings}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Eye size={16} /> {recipe.views}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <Rating value={recipe.rating} precision={0.1} size="small" readOnly />
        <Typography variant="body2" sx={{ fontFamily: 'var(--font-manrope)' }}>
          by {recipe.author}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default function FeaturedRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data.slice(0, 3)))
      .catch((err) => console.error('Failed to fetch recipes:', err));
  }, []);

  return (
    <Box sx={{ py: 8, bgcolor: '#fafafa' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          mb={4}
          sx={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 'bold',
            color: 'var(--color-neutral-900)',
          }}
        >
          Featured Recipes
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' },
            gap: 3,
            justifyItems: 'center',
          }}
        >
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
