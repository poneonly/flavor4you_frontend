'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, Typography, Box, Chip, Rating } from '@mui/material';
import { Clock, Users, Eye } from 'lucide-react';
import { Recipe } from '@/types/recipe';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card
      sx={{
        height: '100%',
        width: '100%',
        maxWidth: 350,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
        },
        cursor: 'pointer',
      }}
      component={Link}
      href={`/recipes/${recipe.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {/* Image */}
      <Box sx={{ position: 'relative', width: '100%', height: 220, flexShrink: 0 }}>
        {recipe.recipeImages ? (
          <Image
            src={recipe.recipeImages}
            alt={recipe.title}
            fill
            sizes="(max-width: 600px) 100vw, 350px"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              bgcolor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
              fontSize: '0.875rem',
            }}
          >
            No image
          </Box>
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
        {/* Categories list */}
        <Box sx={{ mb: 1, display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
          {recipe.categories.map((cat, idx) => (
            <Chip
              key={idx}
              label={cat}
              size="small"
              sx={{
                bgcolor: 'var(--color-primary)',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.75rem',
              }}
            />
          ))}
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            mb: 1,
            fontFamily: 'var(--font-playfair)',
            lineHeight: 1.3,
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
            mb: 2,
            fontFamily: 'var(--font-manrope)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {recipe.description}
        </Typography>

        {/* cookingTime - servings - views */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Clock size={16} color="#666" />
            <Typography variant="body2" color="text.secondary">
              {recipe.cookingTime}m
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Users size={16} color="#666" />
            <Typography variant="body2" color="text.secondary">
              {recipe.servings} servings
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Eye size={16} color="#666" />
            <Typography variant="body2" color="text.secondary">
              {recipe.views}
            </Typography>
          </Box>
        </Box>

        {/* rating + author */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Rating value={recipe.rating} precision={0.1} size="small" readOnly />
            <Typography variant="body2" color="text.secondary">
              {recipe.rating}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
            by {recipe.author}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
