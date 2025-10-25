'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Rating,
  Skeleton,
} from '@mui/material';
import { Shuffle, Clock, Users, Star } from 'lucide-react';

// Mock random recipe data
const mockRandomRecipes = [
  {
    id: 101,
    title: 'Mediterranean Quinoa Bowl',
    description:
      'A healthy and colorful bowl packed with fresh vegetables, quinoa, and a lemon-herb dressing',
    image: '/api/placeholder/500/300',
    cookingTime: 25,
    servings: 2,
    rating: 4.6,
    category: 'Healthy',
    author: 'Chef Sarah',
    difficulty: 'Easy',
  },
  {
    id: 102,
    title: 'Spicy Korean Kimchi Fried Rice',
    description:
      'Authentic Korean comfort food with fermented kimchi, rice, and perfectly fried egg on top',
    image: '/api/placeholder/500/300',
    cookingTime: 20,
    servings: 3,
    rating: 4.8,
    category: 'Korean',
    author: 'Seoul Kitchen',
    difficulty: 'Medium',
  },
  {
    id: 103,
    title: 'Classic French Onion Soup',
    description:
      'Rich, caramelized onions in a savory broth topped with melted Gruyère cheese and crusty bread',
    image: '/api/placeholder/500/300',
    cookingTime: 60,
    servings: 4,
    rating: 4.9,
    category: 'French',
    author: 'Bistro Paris',
    difficulty: 'Medium',
  },
  {
    id: 104,
    title: 'Vegan Chocolate Avocado Mousse',
    description:
      'Creamy, rich chocolate mousse made with ripe avocados for a healthy dessert alternative',
    image: '/api/placeholder/500/300',
    cookingTime: 15,
    servings: 6,
    rating: 4.4,
    category: 'Vegan',
    author: 'Green Spoon',
    difficulty: 'Easy',
  },
  {
    id: 105,
    title: 'Grilled Salmon with Herb Butter',
    description:
      'Perfectly grilled salmon fillet topped with fresh herb butter and served with seasonal vegetables',
    image: '/api/placeholder/500/300',
    cookingTime: 30,
    servings: 4,
    rating: 4.7,
    category: 'Seafood',
    author: 'Ocean Grill',
    difficulty: 'Medium',
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return '#4ECDC4';
    case 'medium':
      return '#FFD93D';
    case 'hard':
      return '#FF6B6B';
    default:
      return '#666';
  }
};

const RandomRecipe = () => {
  const [currentRecipe, setCurrentRecipe] = useState(mockRandomRecipes[0]);
  const [isLoading, setIsLoading] = useState(false);

  const getRandomRecipe = () => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * mockRandomRecipes.length);
      setCurrentRecipe(mockRandomRecipes[randomIndex]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              mb: 2,
              fontFamily: 'var(--font-playfair)',
              color: 'var(--color-neutral-900)',
            }}
          >
            Feeling Adventurous?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontFamily: 'var(--font-manrope)',
              maxWidth: '600px',
              mx: 'auto',
              mb: 4,
            }}
          >
            Let us surprise you with a random recipe! Perfect for when you want to try something new
          </Typography>

          <Button
            onClick={getRandomRecipe}
            disabled={isLoading}
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'var(--color-primary)',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              mb: 4,
              '&:hover': {
                bgcolor: '#e09c4a',
              },
              '&:disabled': {
                bgcolor: '#ccc',
              },
              transition: 'all 0.3s ease',
            }}
            startIcon={<Shuffle size={20} />}
          >
            {isLoading ? 'Finding Recipe...' : 'Get Random Recipe'}
          </Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card
            sx={{
              maxWidth: 600,
              width: '100%',
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            {isLoading ? (
              <>
                <Skeleton variant="rectangular" height={300} />
                <CardContent>
                  <Skeleton variant="text" height={40} width="80%" />
                  <Skeleton variant="text" height={20} width="100%" />
                  <Skeleton variant="text" height={20} width="90%" />
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Skeleton variant="text" width={80} />
                    <Skeleton variant="text" width={80} />
                    <Skeleton variant="text" width={80} />
                  </Box>
                </CardContent>
              </>
            ) : (
              <>
                <CardMedia
                  component="img"
                  height="300"
                  image={currentRecipe.image}
                  alt={currentRecipe.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip
                      label={currentRecipe.category}
                      size="small"
                      sx={{
                        bgcolor: 'var(--color-primary)',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      label={currentRecipe.difficulty}
                      size="small"
                      sx={{
                        bgcolor: getDifficultyColor(currentRecipe.difficulty),
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      fontFamily: 'var(--font-playfair)',
                      lineHeight: 1.3,
                    }}
                  >
                    {currentRecipe.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      fontFamily: 'var(--font-manrope)',
                      lineHeight: 1.6,
                    }}
                  >
                    {currentRecipe.description}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Clock size={18} color="#666" />
                      <Typography variant="body2" color="text.secondary">
                        {currentRecipe.cookingTime} min
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Users size={18} color="#666" />
                      <Typography variant="body2" color="text.secondary">
                        {currentRecipe.servings} servings
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Star size={18} color="#666" />
                      <Rating value={currentRecipe.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="body2" color="text.secondary">
                        {currentRecipe.rating}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      pt: 2,
                      borderTop: '1px solid #eee',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      by {currentRecipe.author}
                    </Typography>
                    <Button
                      component={Link}
                      href={`/recipes/${currentRecipe.id}`}
                      variant="contained"
                      sx={{
                        bgcolor: 'var(--color-primary)',
                        color: 'white',
                        textTransform: 'none',
                        borderRadius: 2,
                        px: 3,
                        '&:hover': {
                          bgcolor: '#e09c4a',
                        },
                      }}
                    >
                      View Recipe
                    </Button>
                  </Box>
                </CardContent>
              </>
            )}
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default RandomRecipe;
