'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
} from '@mui/material';
import { Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

// Mock testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: '/api/placeholder/80/80',
    location: 'New York, NY',
    rating: 5,
    text: "Flavor4You has completely transformed my cooking! The step-by-step instructions are so clear, and I've finally mastered dishes I never thought I could make. My family is amazed!",
    recipe: 'Perfect Beef Wellington',
    date: '2 weeks ago',
    verified: true,
  },
  {
    id: 2,
    name: 'Miguel Rodriguez',
    avatar: '/api/placeholder/80/80',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'As a busy dad, I love how these recipes are practical yet delicious. The prep times are accurate, and my kids actually eat vegetables now thanks to the creative recipes!',
    recipe: 'Hidden Veggie Pasta',
    date: '1 week ago',
    verified: true,
  },
  {
    id: 3,
    name: 'Emily Chen',
    avatar: '/api/placeholder/80/80',
    location: 'Seattle, WA',
    rating: 5,
    text: 'The chef tips and techniques section has made me so much more confident in the kitchen. I went from burning water to hosting dinner parties. Seriously life-changing!',
    recipe: 'Thai Green Curry',
    date: '3 days ago',
    verified: true,
  },
  {
    id: 4,
    name: 'David Thompson',
    avatar: '/api/placeholder/80/80',
    location: 'Chicago, IL',
    rating: 5,
    text: "I've tried many recipe sites, but Flavor4You is different. The community aspect and chef interactions make cooking feel like a shared experience. Love it!",
    recipe: 'Sourdough Bread',
    date: '5 days ago',
    verified: true,
  },
  {
    id: 5,
    name: 'Maria Gonzalez',
    avatar: '/api/placeholder/80/80',
    location: 'Miami, FL',
    rating: 5,
    text: "The cultural diversity of recipes here is incredible. I've learned so much about different cuisines and my palate has completely expanded. Thank you!",
    recipe: 'Authentic Paella',
    date: '1 week ago',
    verified: true,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getVisibleTestimonials = () => {
    const testimonials2 = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      testimonials2.push({ ...testimonials[index], position: i });
    }
    return testimonials2;
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'white' }}>
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
            <MessageCircle size={32} color="var(--color-primary)" />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                fontFamily: 'var(--font-playfair)',
                color: 'var(--color-neutral-900)',
              }}
            >
              What Our Cooks Say
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
            Real stories from real people who've transformed their cooking journey with us
          </Typography>
        </Box>

        {/* Stats Section */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 4,
            mb: 8,
            p: 4,
            bgcolor: '#f8f9fa',
            borderRadius: 4,
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 'bold', color: 'var(--color-primary)', mb: 1 }}
            >
              500K+
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, color: 'var(--color-neutral-900)' }}>
              Happy Cooks
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 'bold', color: 'var(--color-primary)', mb: 1 }}
            >
              4.9★
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, color: 'var(--color-neutral-900)' }}>
              Average Rating
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 'bold', color: 'var(--color-primary)', mb: 1 }}
            >
              50K+
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, color: 'var(--color-neutral-900)' }}>
              Reviews
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 'bold', color: 'var(--color-primary)', mb: 1 }}
            >
              98%
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, color: 'var(--color-neutral-900)' }}>
              Success Rate
            </Typography>
          </Box>
        </Box>

        {/* Testimonials Carousel */}
        <Box sx={{ position: 'relative' }}>
          {/* Navigation Arrows */}
          <IconButton
            onClick={prevTestimonial}
            sx={{
              position: 'absolute',
              left: { xs: -10, md: -20 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              '&:hover': {
                bgcolor: 'var(--color-primary-light)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ChevronLeft size={24} />
          </IconButton>

          <IconButton
            onClick={nextTestimonial}
            sx={{
              position: 'absolute',
              right: { xs: -10, md: -20 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              '&:hover': {
                bgcolor: 'var(--color-primary-light)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ChevronRight size={24} />
          </IconButton>

          {/* Testimonials Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
              px: { xs: 2, md: 0 },
              alignItems: 'stretch',
            }}
          >
            {getVisibleTestimonials().map((testimonial) => (
              <Card
                key={testimonial.id}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent
                  sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  {/* Quote Icon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: 20,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Quote size={20} color="white" />
                  </Box>

                  {/* Rating */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Rating value={testimonial.rating} readOnly size="small" />
                    {testimonial.verified && (
                      <Typography
                        variant="body2"
                        sx={{
                          bgcolor: 'var(--color-primary-light)',
                          color: 'var(--color-primary-dark)',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          fontSize: '0.75rem',
                          fontWeight: 600,
                        }}
                      >
                        Verified Cook
                      </Typography>
                    )}
                  </Box>

                  {/* Testimonial Text */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'var(--color-neutral-900)',
                      mb: 3,
                      fontFamily: 'var(--font-manrope)',
                      lineHeight: 1.7,
                      fontStyle: 'italic',
                      fontSize: '1rem',
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>

                  {/* Bottom Section - Fixed Height */}
                  <Box sx={{ mt: 'auto' }}>
                    {/* User Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Avatar src={testimonial.avatar} sx={{ width: 50, height: 50 }} />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: 'var(--color-neutral-900)',
                            fontSize: '1rem',
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Recipe & Date */}
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: '#f8f9fa',
                        borderRadius: 2,
                        border: '1px solid #eee',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Tried: {testimonial.recipe}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.85rem' }}
                      >
                        {testimonial.date}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Slide Indicators */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 6 }}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => goToTestimonial(index)}
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

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Box
            sx={{
              p: 6,
              bgcolor: 'white',
              borderRadius: 4,
              border: '2px solid var(--color-primary)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background decoration */}
            <Box
              sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 150,
                height: 150,
                borderRadius: '50%',
                bgcolor: 'rgba(248, 178, 91, 0.1)',
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -30,
                left: -30,
                width: 100,
                height: 100,
                borderRadius: '50%',
                bgcolor: 'rgba(248, 178, 91, 0.05)',
                zIndex: 1,
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  fontFamily: 'var(--font-playfair)',
                  color: 'var(--color-neutral-900)',
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                }}
              >
                Ready to Start Your Own{' '}
                <Box
                  component="span"
                  sx={{
                    color: 'var(--color-primary)',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -5,
                      left: 0,
                      right: 0,
                      height: 3,
                      bgcolor: 'var(--color-primary)',
                      borderRadius: 2,
                    },
                  }}
                >
                  Success Story
                </Box>
                ?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontFamily: 'var(--font-manrope)',
                  lineHeight: 1.6,
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Join{' '}
                <Box component="span" sx={{ color: 'var(--color-primary)', fontWeight: 700 }}>
                  500,000+ home cooks
                </Box>{' '}
                who've transformed their kitchens and discovered the joy of cooking with confidence
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                  flexWrap: 'wrap',
                  p: 3,
                  bgcolor: '#f8f9fa',
                  borderRadius: 3,
                  border: '1px solid #eee',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{ color: 'var(--color-primary)', fontWeight: 'bold' }}
                  >
                    ✨
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, color: 'var(--color-neutral-900)' }}
                  >
                    Start cooking today
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{ color: 'var(--color-primary)', fontWeight: 'bold' }}
                  >
                    🍳
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, color: 'var(--color-neutral-900)' }}
                  >
                    Build confidence
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{ color: 'var(--color-primary)', fontWeight: 'bold' }}
                  >
                    🏆
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, color: 'var(--color-neutral-900)' }}
                  >
                    Create memories
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
