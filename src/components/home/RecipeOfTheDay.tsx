'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Chip,
  Rating,
  Avatar,
  Divider,
} from '@mui/material';
import { Clock, Users, Star, Award, ChefHat, Calendar } from 'lucide-react';

// Mock Recipe of the Day data
const recipeOfTheDay = {
  id: 301,
  title: 'Grandma\'s Secret Lasagna',
  description: 'A family recipe passed down through generations, featuring rich layers of homemade pasta, slow-simmered meat sauce, and three types of cheese. This isn\'t just any lasagna - it\'s a masterpiece that took 40 years to perfect.',
  image: '/api/placeholder/600/400',
  cookingTime: 90,
  prepTime: 30,
  servings: 8,
  rating: 4.9,
  reviewCount: 2847,
  category: 'Italian',
  difficulty: 'Medium',
  calories: 420,
  author: {
    name: 'Chef Isabella Romano',
    avatar: '/api/placeholder/60/60',
    expertise: 'Italian Cuisine Specialist',
    yearsExperience: 25,
  },
  highlights: [
    'Family recipe from 1950s Italy',
    'Featured on Food Network',
    'Winner of Best Comfort Food 2024',
    'Over 1M home cooks tried this',
  ],
  ingredients: [
    '1 lb ground beef',
    '1 lb Italian sausage',
    '2 cups ricotta cheese',
    '12 lasagna noodles',
    '4 cups marinara sauce',
    '2 cups mozzarella cheese',
  ],
  quickFacts: {
    bestServedWith: 'Garlic bread & Caesar salad',
    makeAhead: 'Can be prepared 2 days in advance',
    freezer: 'Freezes well for up to 3 months',
  },
};

const RecipeOfTheDay = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 2 }}>
            <Award size={32} color="var(--color-primary)" />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                fontFamily: 'var(--font-playfair)',
                color: 'var(--color-neutral-900)',
              }}
            >
              Recipe of the Day
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
            <Calendar size={20} color="var(--color-primary)" />
            <Typography
              variant="body1"
              sx={{
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-manrope)',
                fontWeight: 600,
              }}
            >
              Today's Special Selection
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontFamily: 'var(--font-manrope)',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Handpicked by our culinary team for its exceptional taste and popularity
          </Typography>
        </Box>

        <Card
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
          }}
        >
          <Box
            sx={{
              display: { xs: 'block', lg: 'flex' },
              minHeight: { xs: 'auto', lg: '500px' },
            }}
          >
            {/* Image Section */}
            <Box
              sx={{
                flex: '1 1 50%',
                position: 'relative',
                minHeight: { xs: '300px', lg: '500px' },
                backgroundImage: `url(${recipeOfTheDay.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Award Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  bgcolor: 'var(--color-primary)',
                  color: 'white',
                  px: 3,
                  py: 1,
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                }}
              >
                <Star size={18} />
                Recipe of the Day
              </Box>

              {/* Rating Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                  bgcolor: 'rgba(0,0,0,0.8)',
                  color: 'white',
                  px: 2.5,
                  py: 1.5,
                  borderRadius: 4,
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                  <Rating value={recipeOfTheDay.rating} precision={0.1} size="small" readOnly />
                </Box>
                <Typography variant="body2" sx={{ fontSize: '0.8rem', opacity: 0.9 }}>
                  {recipeOfTheDay.reviewCount} reviews
                </Typography>
              </Box>
            </Box>

            {/* Content Section */}
            <Box sx={{ flex: '1 1 50%', p: { xs: 3, md: 4, lg: 5 } }}>
              <CardContent sx={{ p: 0 }}>
                {/* Category & Difficulty */}
                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                  <Chip
                    label={recipeOfTheDay.category}
                    sx={{
                      bgcolor: 'var(--color-primary-light)',
                      color: 'var(--color-primary-dark)',
                      fontWeight: 600,
                    }}
                  />
                  <Chip
                    label={recipeOfTheDay.difficulty}
                    variant="outlined"
                    sx={{
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-primary)',
                      fontWeight: 600,
                    }}
                  />
                </Box>

                {/* Title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    fontWeight: 'bold',
                    mb: 2,
                    fontFamily: 'var(--font-playfair)',
                    lineHeight: 1.2,
                    color: 'var(--color-neutral-900)',
                  }}
                >
                  {recipeOfTheDay.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    fontFamily: 'var(--font-manrope)',
                    lineHeight: 1.7,
                    fontSize: '1.1rem',
                  }}
                >
                  {recipeOfTheDay.description}
                </Typography>

                {/* Quick Stats */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                    gap: 2,
                    mb: 3,
                    p: 2.5,
                    bgcolor: '#f8f9fa',
                    borderRadius: 3,
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Clock size={24} color="var(--color-primary)" />
                    <Typography variant="body2" sx={{ mt: 1, fontWeight: 600 }}>
                      {recipeOfTheDay.cookingTime}m cook
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Users size={24} color="var(--color-primary)" />
                    <Typography variant="body2" sx={{ mt: 1, fontWeight: 600 }}>
                      {recipeOfTheDay.servings} servings
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
                      {recipeOfTheDay.calories}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      calories
                    </Typography>
                  </Box>
                </Box>

                {/* Chef Info */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Avatar
                    src={recipeOfTheDay.author.avatar}
                    sx={{ width: 50, height: 50 }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'var(--color-neutral-900)' }}>
                      {recipeOfTheDay.author.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <ChefHat size={16} color="var(--color-primary)" />
                      <Typography variant="body2" color="text.secondary">
                        {recipeOfTheDay.author.expertise}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ mb: 3 }} />

                {/* Highlights */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: 'var(--color-neutral-900)' }}>
                    Why This Recipe is Special
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {recipeOfTheDay.highlights.map((highlight, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: 'var(--color-primary)',
                          }}
                        />
                        <Typography variant="body2" sx={{ fontFamily: 'var(--font-manrope)' }}>
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    href={`/recipes/${recipeOfTheDay.id}`}
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'var(--color-primary)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontWeight: 600,
                      textTransform: 'none',
                      flex: 1,
                      minWidth: 160,
                      '&:hover': {
                        bgcolor: 'var(--color-primary-dark)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get Full Recipe
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-primary)',
                      px: 3,
                      py: 1.5,
                      borderRadius: 3,
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: 'var(--color-primary-light)',
                        borderColor: 'var(--color-primary-dark)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Save Recipe
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default RecipeOfTheDay;