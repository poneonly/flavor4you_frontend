'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { Pizza, Salad, Cake, Coffee, Fish, Apple, Soup, Cookie } from 'lucide-react';

// Mock data for categories
const categories = [
  {
    id: 1,
    name: 'Italian',
    description: 'Pasta, Pizza & More',
    recipeCount: 245,
    icon: Pizza,
    color: '#FF6B6B',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
  },
  {
    id: 2,
    name: 'Healthy',
    description: 'Fresh & Nutritious',
    recipeCount: 189,
    icon: Salad,
    color: '#4ECDC4',
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
  },
  {
    id: 3,
    name: 'Desserts',
    description: 'Sweet Treats',
    recipeCount: 156,
    icon: Cake,
    color: '#FFD93D',
    gradient: 'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%)',
  },
  {
    id: 4,
    name: 'Beverages',
    description: 'Drinks & Smoothies',
    recipeCount: 98,
    icon: Coffee,
    color: '#6C5CE7',
    gradient: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
  },
  {
    id: 5,
    name: 'Seafood',
    description: 'Fresh from the Ocean',
    recipeCount: 134,
    icon: Fish,
    color: '#0984E3',
    gradient: 'linear-gradient(135deg, #0984E3 0%, #00B894 100%)',
  },
  {
    id: 6,
    name: 'Vegan',
    description: 'Plant-Based Delights',
    recipeCount: 167,
    icon: Apple,
    color: '#00B894',
    gradient: 'linear-gradient(135deg, #00B894 0%, #55A3FF 100%)',
  },
  {
    id: 7,
    name: 'Soups',
    description: 'Warm & Comforting',
    recipeCount: 89,
    icon: Soup,
    color: '#E17055',
    gradient: 'linear-gradient(135deg, #E17055 0%, #FDCB6E 100%)',
  },
  {
    id: 8,
    name: 'Snacks',
    description: 'Quick Bites',
    recipeCount: 123,
    icon: Cookie,
    color: '#FD79A8',
    gradient: 'linear-gradient(135deg, #FD79A8 0%, #FDCB6E 100%)',
  },
];

const CategoryCard = ({ category }: { category: (typeof categories)[0] }) => {
  const IconComponent = category.icon;

  return (
    <Card
      component={Link}
      href={`/recipes?category=${category.name.toLowerCase()}`}
      sx={{
        height: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        textDecoration: 'none',
        color: 'inherit',
        bgcolor: 'var(--color-primary)',
        border: 'none',
        cursor: 'pointer',
        transform: 'translateY(0)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        '&:hover': {
          transform: 'translateY(-12px) scale(1.02)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
          '& .icon-container': {
            transform: 'scale(1.15) rotate(5deg)',
          },
          '& .icon-container svg': {
            color: 'var(--color-primary)',
          },
          '& .category-title': {
            transform: 'translateY(-2px)',
          },
          '& .recipe-count': {
            transform: 'translateY(2px)',
          },
        },
      }}
    >
      <CardContent
        sx={{
          p: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          color: 'white',
        }}
      >
        <Box
          className="icon-container"
          sx={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.2)',
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backdropFilter: 'blur(10px)',
            '& svg': {
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            },
          }}
        >
          <IconComponent size={35} color="white" className="category-icon" />
        </Box>

        <Typography
          variant="h5"
          className="category-title"
          sx={{
            fontWeight: 'bold',
            mb: 1.5,
            fontFamily: 'var(--font-playfair)',
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {category.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 2.5,
            fontFamily: 'var(--font-manrope)',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.5,
            transition: 'all 0.3s ease',
          }}
        >
          {category.description}
        </Typography>

        <Typography
          variant="h6"
          className="recipe-count"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'var(--font-manrope)',
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {category.recipeCount} recipes
        </Typography>
      </CardContent>
    </Card>
  );
};

const CategoriesShowcase = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'white' }}>
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
            Explore Categories
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontFamily: 'var(--font-manrope)',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            From Italian classics to healthy options, find recipes that match your taste and dietary
            preferences
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontFamily: 'var(--font-manrope)',
            }}
          >
            Can't find what you're looking for?{' '}
            <Typography
              component={Link}
              href="/categories"
              sx={{
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Browse all categories
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CategoriesShowcase;
