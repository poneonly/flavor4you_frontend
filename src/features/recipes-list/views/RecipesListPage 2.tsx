'use client';

import * as React from 'react';
import { Box, Container } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import MainLayout from '@layouts/ContainerLayout';
import LimitSelector from '@components/LimitSelector';
import RecipesList from '../list/RecipesList';
import PaginationComponent from '@components/PaginationComponent';
import { Recipe } from '@/types/recipe';

const RECIPES: Recipe[] = [
  {
    id: 1,
    recipeImages:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    title: 'Chocolate Cake',
    description: 'Rich and moist cake',
    cookingTime: 45,
    servings: 6,
    views: 1240,
    rating: 4.5,
    author: 'Ben',
    categories: ['Dessert', 'Baking'],
    difficulty: 'medium',
    ingredients: [],
    steps: [],
  },
  {
    id: 2,
    recipeImages:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    title: 'Curated Collections',
    description: 'Discover recipes sorted by cuisine, ingredient, or occasion.',
    cookingTime: 30,
    servings: 4,
    views: 860,
    rating: 4.2,
    author: 'Anna',
    categories: ['Collections', 'Curation'],
    difficulty: 'easy',
    ingredients: [],
    steps: [],
  },
  {
    id: 3,
    recipeImages:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    title: 'Community Voting',
    description: 'Rate and comment on recipes to highlight the best.',
    cookingTime: 15,
    servings: 2,
    views: 430,
    rating: 3.9,
    author: 'John',
    categories: ['Community', 'Interactive'],
    difficulty: 'easy',
    ingredients: [],
    steps: [],
  },
  {
    id: 4,
    recipeImages:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    title: 'Chocolate Cake',
    description: 'Rich and moist cake',
    cookingTime: 45,
    servings: 8,
    views: 1500,
    rating: 4.7,
    author: 'Ben',
    categories: ['Dessert', 'Baking'],
    difficulty: 'medium',
    ingredients: [],
    steps: [],
  },
  {
    id: 5,
    recipeImages:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    title: 'Curated Collections',
    description: 'Discover recipes sorted by cuisine, ingredient, or occasion.',
    cookingTime: 30,
    servings: 5,
    views: 920,
    rating: 4.3,
    author: 'Anna',
    categories: ['Collections', 'Curation'],
    difficulty: 'easy',
    ingredients: [],
    steps: [],
  },
  {
    id: 6,
    recipeImages:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    title: 'Community Voting',
    description: 'Rate and comment on recipes to highlight the best.',
    cookingTime: 15,
    servings: 3,
    views: 510,
    rating: 4.0,
    author: 'John',
    categories: ['Community', 'Interactive'],
    difficulty: 'easy',
    ingredients: [],
    steps: [],
  },
];

export default function RecipesListPage() {
  // Handle filtering by category and searching by title
  const searchParams = useSearchParams();
  const category = searchParams?.get('category') ?? 'All';

  let filteredRecipesData = RECIPES;
  if (category !== 'All') {
    filteredRecipesData = filteredRecipesData.filter((recipe) =>
      recipe.categories.includes(category)
    );
  }

  const searchQuery = searchParams?.get('search')?.toLowerCase() || '';
  if (searchQuery) {
    filteredRecipesData = filteredRecipesData.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery)
    );
  }

  // Handle pagination
  const [page, setPage] = React.useState<number>(1);
  const [limitPerPage, setLimitPerPage] = React.useState<number>(4);

  const start = (page - 1) * limitPerPage;
  const end = start + limitPerPage;
  const paginatedRecipesData = filteredRecipesData.slice(start, end);

  return (
    <MainLayout>
      {/* Banner */}
      <Box
        sx={{
          width: '100%',
          height: { xs: 200, md: 300 },
          backgroundImage:
            'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mt: 0,
          mb: 6,
        }}
      />

      {/* Title */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Box
          component="h1"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 'bold',
            textAlign: 'flex-start',
            color: 'var(--color-primary)',
          }}
        >
          Recipes
        </Box>
      </Container>

      {/* Recipes list */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
          <LimitSelector value={limitPerPage} onChange={setLimitPerPage} />
        </Box>
        <RecipesList recipesData={paginatedRecipesData} />
      </Container>

      {/* Pagination */}
      <Container maxWidth="lg" sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
        <PaginationComponent
          totalItems={filteredRecipesData.length}
          limitPerPage={limitPerPage}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </Container>
    </MainLayout>
  );
}
