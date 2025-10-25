'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Alert,
  Chip,
} from '@mui/material';
import { Mail, Gift, BookOpen, Bell, Check, Heart } from 'lucide-react';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    weekly: true,
    newRecipes: true,
    chefTips: false,
    seasonal: false,
  });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const benefits = [
    {
      icon: <BookOpen size={24} />,
      title: 'Weekly Recipe Collection',
      description: 'Get 5 hand-picked recipes delivered every Sunday',
    },
    {
      icon: <Gift size={24} />,
      title: 'Exclusive Content',
      description: 'Access to chef secrets and premium recipes',
    },
    {
      icon: <Bell size={24} />,
      title: 'Early Access',
      description: 'Be first to try new features and seasonal menus',
    },
    {
      icon: <Heart size={24} />,
      title: 'Personalized Tips',
      description: 'Cooking tips tailored to your skill level',
    },
  ];

  const handleSubscribe = async () => {
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
    }, 1500);
  };

  const handlePreferenceChange = (preference: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [preference]: !prev[preference]
    }));
  };

  if (isSubscribed) {
    return (
      <Box sx={{ py: 8, bgcolor: 'var(--color-primary)', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="md">
          <Card
            sx={{
              borderRadius: 4,
              p: 6,
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              background: 'white',
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: '#4CAF50',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
              }}
            >
              <Check size={40} color="white" />
            </Box>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontFamily: 'var(--font-playfair)',
                color: 'var(--color-neutral-900)',
              }}
            >
              Welcome to the Family! 🎉
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                mb: 3,
                fontFamily: 'var(--font-manrope)',
                lineHeight: 1.6,
              }}
            >
              You're all set! Check your inbox for a welcome email with your first recipe collection.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="Weekly Recipes ✓" color="success" />
              <Chip label="Chef Tips ✓" color="success" />
              <Chip label="Exclusive Content ✓" color="success" />
            </Box>
          </Card>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, bgcolor: 'var(--color-primary)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.1)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 200,
          height: 200,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.05)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: { xs: 'block', lg: 'flex' },
            alignItems: 'center',
            gap: 8,
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: '1 1 50%', mb: { xs: 6, lg: 0 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Mail size={32} color="white" />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-playfair)',
                  color: 'white',
                }}
              >
                Stay in the Kitchen Loop
              </Typography>
            </Box>

            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                mb: 4,
                fontFamily: 'var(--font-manrope)',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Join 500,000+ food lovers getting weekly recipes, chef tips, and exclusive content delivered straight to their inbox
            </Typography>

            {/* Benefits Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 3,
                mb: 4,
              }}
            >
              {benefits.map((benefit, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box
                    sx={{
                      color: 'white',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      borderRadius: '50%',
                      p: 1,
                      flexShrink: 0,
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: 'white', fontWeight: 600, mb: 0.5, fontSize: '1rem' }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}
                    >
                      {benefit.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Social Proof */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                bgcolor: 'rgba(255,255,255,0.1)',
                borderRadius: 3,
                p: 3,
                backdropFilter: 'blur(10px)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: `hsl(${i * 60}, 70%, 60%)`,
                      border: '3px solid white',
                      ml: i > 1 ? -1 : 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      color: 'white',
                    }}
                  >
                    {String.fromCharCode(64 + i)}
                  </Box>
                ))}
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                  500K+ subscribers
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                  Join the community
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Content - Subscribe Form */}
          <Box sx={{ flex: '1 1 50%' }}>
            <Card
              sx={{
                borderRadius: 4,
                p: 4,
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                background: 'white',
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    fontFamily: 'var(--font-playfair)',
                    color: 'var(--color-neutral-900)',
                    textAlign: 'center',
                  }}
                >
                  Get Started Today
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    textAlign: 'center',
                    fontFamily: 'var(--font-manrope)',
                  }}
                >
                  Your first recipe collection is waiting!
                </Typography>

                {/* Email Input */}
                <TextField
                  fullWidth
                  label="Your Email Address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      '&:hover fieldset': {
                        borderColor: 'var(--color-primary)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'var(--color-primary)',
                      },
                    },
                  }}
                />

                {/* Preferences */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'var(--color-neutral-900)' }}>
                    What would you like to receive?
                  </Typography>

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={preferences.weekly}
                        onChange={() => handlePreferenceChange('weekly')}
                        sx={{ color: 'var(--color-primary)' }}
                      />
                    }
                    label="Weekly Recipe Roundup"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={preferences.newRecipes}
                        onChange={() => handlePreferenceChange('newRecipes')}
                        sx={{ color: 'var(--color-primary)' }}
                      />
                    }
                    label="New Recipe Alerts"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={preferences.chefTips}
                        onChange={() => handlePreferenceChange('chefTips')}
                        sx={{ color: 'var(--color-primary)' }}
                      />
                    }
                    label="Chef Tips & Techniques"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={preferences.seasonal}
                        onChange={() => handlePreferenceChange('seasonal')}
                        sx={{ color: 'var(--color-primary)' }}
                      />
                    }
                    label="Seasonal Menus"
                  />
                </Box>

                {/* Subscribe Button */}
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleSubscribe}
                  disabled={!email || isLoading}
                  sx={{
                    bgcolor: 'var(--color-primary)',
                    color: 'white',
                    py: 2,
                    borderRadius: 3,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    mb: 2,
                    '&:hover': {
                      bgcolor: 'var(--color-primary-dark)',
                      transform: 'translateY(-2px)',
                    },
                    '&:disabled': {
                      bgcolor: '#ccc',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {isLoading ? 'Subscribing...' : '🍽️ Start My Food Journey'}
                </Button>

                {/* Privacy Note */}
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-manrope)',
                  }}
                >
                  We respect your privacy. Unsubscribe at any time. No spam, ever.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsletterSubscribe;