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
  Avatar,
  Chip,
  Divider,
} from '@mui/material';
import { ChefHat, Award, BookOpen, Users, MapPin, Instagram, Twitter } from 'lucide-react';

// Mock Chef Spotlight data
const featuredChefs = [
  {
    id: 401,
    name: 'Chef Marcus Chen',
    avatar: '/api/placeholder/120/120',
    specialty: 'Asian Fusion',
    location: 'San Francisco, CA',
    experience: '15 years',
    restaurant: 'Golden Dragon',
    description: 'Michelin-starred chef blending traditional Asian flavors with modern techniques.',
    achievements: ['Michelin Star 2023', 'James Beard Nominee', 'Top Chef Winner'],
    socialMedia: {
      instagram: '@chefmarcuschen',
      twitter: '@marcuschen_chef',
    },
    stats: {
      recipes: 127,
      followers: '2.3M',
      rating: 4.9,
    },
    signature: 'Miso Glazed Black Cod',
    backgroundImage: '/api/placeholder/400/250',
    featured: true,
  },
  {
    id: 402,
    name: 'Chef Sofia Martinez',
    avatar: '/api/placeholder/120/120',
    specialty: 'Mediterranean',
    location: 'Barcelona, Spain',
    experience: '12 years',
    restaurant: 'Casa del Sol',
    description:
      'Passionate about authentic Mediterranean cuisine using locally sourced ingredients.',
    achievements: ['World Food Awards 2024', 'Best New Chef 2022'],
    socialMedia: {
      instagram: '@chefsofiam',
      twitter: '@sofiamartinez',
    },
    stats: {
      recipes: 89,
      followers: '1.8M',
      rating: 4.8,
    },
    signature: 'Truffle Paella',
    backgroundImage: '/api/placeholder/400/250',
    featured: false,
  },
  {
    id: 403,
    name: 'Chef David Thompson',
    avatar: '/api/placeholder/120/120',
    specialty: 'Modern American',
    location: 'Nashville, TN',
    experience: '20 years',
    restaurant: 'The Copper Pot',
    description: 'Farm-to-table pioneer creating innovative dishes with Southern roots.',
    achievements: ['Food & Wine Best Chef', 'Cookbook Author', 'TV Host'],
    socialMedia: {
      instagram: '@chefthompson',
      twitter: '@davidthompson',
    },
    stats: {
      recipes: 156,
      followers: '3.1M',
      rating: 4.9,
    },
    signature: 'Bourbon Glazed Pork Belly',
    backgroundImage: '/api/placeholder/400/250',
    featured: false,
  },
];

const ChefSpotlight = () => {
  const featuredChef = featuredChefs.find((chef) => chef.featured);
  const otherChefs = featuredChefs.filter((chef) => !chef.featured);

  return (
    <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1.5,
              mb: 2,
            }}
          >
            <ChefHat size={32} color="var(--color-primary)" />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                fontFamily: 'var(--font-playfair)',
                color: 'var(--color-neutral-900)',
              }}
            >
              Chef Spotlight
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
            Meet the culinary masters behind our most beloved recipes
          </Typography>
        </Box>

        {/* Featured Chef Card */}
        {featuredChef && (
          <Card
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              mb: 6,
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: { xs: 'block', lg: 'flex' },
                minHeight: { xs: 'auto', lg: '400px' },
              }}
            >
              {/* Background Image */}
              <Box
                sx={{
                  flex: '1 1 40%',
                  position: 'relative',
                  minHeight: { xs: '250px', lg: '400px' },
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${featuredChef.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Featured Badge */}
                <Chip
                  label="Featured Chef"
                  sx={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    bgcolor: 'var(--color-primary)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                  }}
                />

                {/* Social Media Links */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    display: 'flex',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.9)',
                      borderRadius: '50%',
                      p: 1,
                      cursor: 'pointer',
                      '&:hover': { bgcolor: 'white' },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Instagram size={20} color="var(--color-primary)" />
                  </Box>
                  <Box
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.9)',
                      borderRadius: '50%',
                      p: 1,
                      cursor: 'pointer',
                      '&:hover': { bgcolor: 'white' },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Twitter size={20} color="var(--color-primary)" />
                  </Box>
                </Box>
              </Box>

              {/* Content */}
              <Box sx={{ flex: '1 1 60%', p: { xs: 3, md: 4 } }}>
                <CardContent sx={{ p: 0 }}>
                  {/* Chef Avatar and Basic Info */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                    <Avatar
                      src={featuredChef.avatar}
                      sx={{ width: 80, height: 80, border: '4px solid var(--color-primary-light)' }}
                    />
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 'bold',
                          fontFamily: 'var(--font-playfair)',
                          color: 'var(--color-neutral-900)',
                          mb: 0.5,
                        }}
                      >
                        {featuredChef.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <ChefHat size={18} color="var(--color-primary)" />
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, color: 'var(--color-primary)' }}
                        >
                          {featuredChef.specialty} • {featuredChef.experience}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <MapPin size={16} color="#666" />
                        <Typography variant="body2" color="text.secondary">
                          {featuredChef.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

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
                    {featuredChef.description}
                  </Typography>

                  {/* Stats */}
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: 2,
                      mb: 3,
                      p: 2.5,
                      bgcolor: 'rgba(248, 178, 91, 0.1)',
                      borderRadius: 3,
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 'bold', color: 'var(--color-primary)' }}
                      >
                        {featuredChef.stats.recipes}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Recipes
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 'bold', color: 'var(--color-primary)' }}
                      >
                        {featuredChef.stats.followers}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Followers
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 'bold', color: 'var(--color-primary)' }}
                      >
                        {featuredChef.stats.rating}★
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Rating
                      </Typography>
                    </Box>
                  </Box>

                  {/* Achievements */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 2, color: 'var(--color-neutral-900)' }}
                    >
                      Recent Achievements
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {featuredChef.achievements.map((achievement, index) => (
                        <Chip
                          key={index}
                          label={achievement}
                          size="small"
                          sx={{
                            bgcolor: 'var(--color-primary-light)',
                            color: 'white',
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Signature Dish */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      Signature Dish
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: 'var(--color-primary)' }}
                    >
                      {featuredChef.signature}
                    </Typography>
                  </Box>

                  {/* Action Buttons */}
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      component={Link}
                      href={`/chefs/${featuredChef.id}`}
                      variant="contained"
                      sx={{
                        bgcolor: 'var(--color-primary)',
                        color: 'white',
                        px: 3,
                        py: 1.5,
                        borderRadius: 3,
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: 'var(--color-primary-dark)',
                        },
                      }}
                    >
                      View Chef Profile
                    </Button>
                    <Button
                      component={Link}
                      href={`/chefs/${featuredChef.id}/recipes`}
                      variant="outlined"
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
                        },
                      }}
                    >
                      See All Recipes
                    </Button>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Card>
        )}

        {/* Other Chefs Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
            alignItems: 'stretch',
          }}
        >
          {otherChefs.map((chef) => (
            <Card
              key={chef.id}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, mb: 2.5 }}>
                  <Avatar
                    src={chef.avatar}
                    sx={{ width: 60, height: 60, border: '3px solid var(--color-primary-light)' }}
                  />
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 'bold',
                        fontFamily: 'var(--font-playfair)',
                        color: 'var(--color-neutral-900)',
                        mb: 0.5,
                      }}
                    >
                      {chef.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'var(--color-primary)', fontWeight: 600 }}
                    >
                      {chef.specialty}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {chef.location}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    mb: 2.5,
                    fontFamily: 'var(--font-manrope)',
                    lineHeight: 1.6,
                    flexGrow: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {chef.description}
                </Typography>

                {/* Bottom Section - Fixed Height */}
                <Box sx={{ mt: 'auto' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2.5,
                      p: 2,
                      bgcolor: '#f8f9fa',
                      borderRadius: 2,
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 'bold', color: 'var(--color-primary)' }}
                      >
                        {chef.stats.recipes}
                      </Typography>
                      <Typography variant="body2">Recipes</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 'bold', color: 'var(--color-primary)' }}
                      >
                        {chef.stats.followers}
                      </Typography>
                      <Typography variant="body2">Followers</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 'bold', color: 'var(--color-primary)' }}
                      >
                        {chef.stats.rating}★
                      </Typography>
                      <Typography variant="body2">Rating</Typography>
                    </Box>
                  </Box>

                  <Button
                    component={Link}
                    href={`/chefs/${chef.id}`}
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-primary)',
                      py: 1.5,
                      borderRadius: 3,
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: 'var(--color-primary-light)',
                        borderColor: 'var(--color-primary-dark)',
                      },
                    }}
                  >
                    View Profile
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* View All Chefs Button */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            href="/chefs"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'var(--color-primary)',
              color: 'white',
              px: 6,
              py: 2,
              borderRadius: 4,
              fontSize: '1.1rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                bgcolor: 'var(--color-primary-dark)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Discover All Our Chefs
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ChefSpotlight;
