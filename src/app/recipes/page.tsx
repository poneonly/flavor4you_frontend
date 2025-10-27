import React, { Suspense } from 'react';
import RecipesListPage from '../../features/recipes-list/views/RecipesListPage';

export const metadata = {
  title: 'Recipes - Flavor4You',
  description: 'Browse all recipes on Flavor4You',
};

const RecipesList: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecipesListPage />
    </Suspense>
  );
};

export default RecipesList;
