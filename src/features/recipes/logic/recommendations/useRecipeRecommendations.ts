'use client';

import { useEffect, useState, useMemo } from 'react';
import type { Recipe } from '@/types/recipe';

type UseRecipeRecommendationsProps = {
  currentRecipe: Recipe;
  maxRecommendations?: number;
};

type UseRecipeRecommendationsResult = {
  recommendations: Recipe[];
  isLoading: boolean;
};

export const useRecipeRecommendations = ({
  currentRecipe,
  maxRecommendations = 6,
}: UseRecipeRecommendationsProps): UseRecipeRecommendationsResult => {
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch('/recipes.json');
        if (!res.ok) throw new Error('Failed to fetch recipes.json');
        const data: Recipe[] = await res.json();
        setAllRecipes(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const recommendations = useMemo(() => {
    if (allRecipes.length === 0) return [];

    const similarRecipes = allRecipes
      .filter((recipe) => recipe.id !== currentRecipe.id)
      .map((recipe) => {
        const currentCategories = new Set(currentRecipe.categories);
        const recipeCategories = new Set(recipe.categories);

        const commonCategories = [...currentCategories].filter((cat) =>
          recipeCategories.has(cat),
        ).length;

        const similarityScore =
          commonCategories /
          Math.max(currentCategories.size, recipeCategories.size);

        return { ...recipe, similarityScore };
      })
      .filter((recipe) => recipe.similarityScore > 0)
      .sort((a, b) => b.similarityScore - a.similarityScore)
      .slice(0, maxRecommendations)
      .map(({ similarityScore, ...recipe }) => recipe);

    return similarRecipes;
  }, [allRecipes, currentRecipe, maxRecommendations]);

  return {
    recommendations,
    isLoading,
  };
};

export default useRecipeRecommendations;
