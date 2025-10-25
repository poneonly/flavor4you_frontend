'use client';

import * as React from 'react';
import { Box, Container } from '@mui/material';
import { useSearchParams, useRouter } from 'next/navigation';
import MainLayout from '@layouts/ContainerLayout';
import LimitSelector from '@components/LimitSelector';
import RecipesList from '../list/RecipesList';
import PaginationComponent from '@components/PaginationComponent';
import Image from 'next/image';
import type { Recipe } from '@/types/recipe';

export default function RecipesListPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams?.get('category') ?? 'All';
  const searchQuery = searchParams?.get('search')?.toLowerCase() || '';
  const page = Number(searchParams?.get('page')) || 1;
  const limitPerPage = Number(searchParams?.get('limit')) || 8;

  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchRecipes = async () => {
      try {
        let url = '/api/recipes';

        if (searchQuery) {
          url = `/api/recipes/search?search=${encodeURIComponent(searchQuery)}`;
        } else if (category && category !== 'All') {
          url = `/api/recipes/category?category=${encodeURIComponent(category)}`;
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to load recipes');
        const data: Recipe[] = await res.json();
        setRecipes(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [category, searchQuery]);

  // Pagination
  const start = (page - 1) * limitPerPage;
  const end = start + limitPerPage;
  const paginatedRecipesData = recipes.slice(start, end);

  // Page title
  const pageTitle = React.useMemo(() => {
    if (searchQuery) {
      return `Recipes by "${searchQuery}"`;
    }
    if (category !== 'All') {
      return `Recipes by ${category}`;
    }
    return 'Recipes';
  }, [category, searchQuery]);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    params.set('limit', limitPerPage.toString()); // giữ lại limit
    router.push(`/recipes?${params.toString()}`);
  };

  const handleLimitChange = (newLimit: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('limit', newLimit.toString());
    params.set('page', '1');
    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <MainLayout>
      {/* Banner */}
      <Box sx={{ position: 'relative', width: '100%', height: { xs: 300, md: 400 } }}>
        <Image
          src="https://res.cloudinary.com/dkp10td9f/image/upload/v1758614983/IMG_6056_rulkxk.jpg"
          alt="Flavour4You"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </Box>

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
          {pageTitle}
        </Box>
      </Container>

      {/* Recipes list */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        {loading ? (
          <Box>Loading recipes...</Box>
        ) : (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
              <LimitSelector value={limitPerPage} onChange={handleLimitChange} />
            </Box>
            <RecipesList recipesData={paginatedRecipesData} />
          </>
        )}
      </Container>

      {/* Pagination */}
      {!loading && (
        <Container maxWidth="lg" sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
          <PaginationComponent
            totalItems={recipes.length}
            limitPerPage={limitPerPage}
            onPageChange={handlePageChange}
          />
        </Container>
      )}
    </MainLayout>
  );
}
