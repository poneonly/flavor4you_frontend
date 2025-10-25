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
  IconButton,
} from '@mui/material';
import { ChevronLeft, ChevronRight, Clock, Users, TrendingUp } from 'lucide-react';
import { Recipe } from '@/types/recipe';

export default function TrendingRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    fetch('/recipes.json')
      .then((res) => res.json())
      .then((data: Recipe[]) => {
        const top = [...data].sort((a, b) => b.views - a.views).slice(0, 5);
        setRecipes(top);
      })
      .catch((err) => console.error('Failed to fetch trending recipes:', err));
  }, []);

  // Auto slide
  useEffect(() => {
    if (!isAutoPlaying || recipes.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recipes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, recipes]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % recipes.length);
    pauseAutoPlay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + recipes.length) % recipes.length);
    pauseAutoPlay();
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // resume sau 8s
  };

  if (recipes.length === 0) return null;

  const visible = [0, 1, 2].map((i) => recipes[(currentIndex + i) % recipes.length]);

  return (
    <Box sx={{ py: 8, bgcolor: '#f8f9fa', position: 'relative' }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box textAlign="center" mb={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <TrendingUp size={28} color="var(--color-primary)" />
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{ fontFamily: 'var(--font-playfair)', color: 'var(--color-neutral-900)' }}
            >
              Trending Now
            </Typography>
          </Box>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* Arrows */}
          <IconButton
            onClick={prevSlide}
            sx={{ position: 'absolute', left: -20, top: '40%', zIndex: 2 }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{ position: 'absolute', right: -20, top: '40%', zIndex: 2 }}
          >
            <ChevronRight />
          </IconButton>

          {/* Recipe Cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' },
              gap: 3,
              justifyItems: 'center',
            }}
          >
            {visible.map((recipe, idx) => (
              <Card
                key={recipe.id}
                component={Link}
                href={`/recipes/${recipe.id}`}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  borderRadius: 2,
                  overflow: 'hidden',
                  maxWidth: 300,
                  width: '100%',
                  transition: 'transform 0.4s, box-shadow 0.4s',
                  transform: idx === 1 ? 'scale(1.05)' : 'scale(1)',
                  boxShadow:
                    idx === 1 ? '0 20px 40px rgba(0,0,0,0.15)' : '0 8px 20px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: idx === 1 ? 'scale(1.08)' : 'scale(1.03)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                  },
                }}
              >
                {/* Image wrapper giữ tỷ lệ 16:9 */}
                <Box sx={{ position: 'relative', width: '100%', pt: '56.25%' }}>
                  <CardMedia
                    component="img"
                    image={recipe.recipeImages}
                    alt={recipe.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>

                <CardContent>
                  <Chip label={recipe.categories[0]} size="small" />
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      mt: 1,
                      fontFamily: 'var(--font-playfair)',
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

                  {/* Info row */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Clock size={16} /> {recipe.cookingTime}m
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Users size={16} /> {recipe.servings}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Rating value={recipe.rating} precision={0.1} size="small" readOnly />
                      {recipe.rating}
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={1}
                    sx={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    by {recipe.author}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Indicators */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
            {recipes.map((_, index) => (
              <Box
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: currentIndex === index ? 'var(--color-primary)' : 'rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor:
                      currentIndex === index ? 'var(--color-primary-dark)' : 'rgba(0,0,0,0.4)',
                    transform: 'scale(1.2)',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
