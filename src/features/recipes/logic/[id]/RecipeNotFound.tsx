'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ContainerLayout from '@layouts/ContainerLayout';
import RecipeDetailView from '../../views/RecipeDetailView';
import { RECIPES_PATH } from 'const/path';
import { Recipe } from '@/types/recipe';

type Props = { id: string };

const RecipeDetailRouteView: React.FC<Props> = ({ id }) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch('/recipes.json');
        if (!res.ok) throw new Error('Failed to fetch recipes.json');
        const data: Recipe[] = await res.json(); // 👈 cast mảng
        const found = data.find((item) => String(item.id) === String(id)) || null;
        setRecipe(found);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <ContainerLayout>
        <p className="text-center py-10">Loading...</p>
      </ContainerLayout>
    );
  }

  if (!recipe) {
    return (
      <ContainerLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipe Not Found</h1>
            <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist.</p>
            <Link
              href={RECIPES_PATH}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Back to Recipes
            </Link>
          </div>
        </div>
      </ContainerLayout>
    );
  }

  return <RecipeDetailView recipe={recipe} />;
};

export default RecipeDetailRouteView;
