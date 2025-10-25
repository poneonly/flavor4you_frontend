import React from 'react';
import RecipeDetailRouteView from 'features/recipes/logic/[id]/RecipeNotFound';

export const metadata = {
  title: 'Recipe Detail - Flavor4You',
  description: 'View detailed recipe information',
};

type PageProps = {
  params: Promise<{ id: string }>;
};

const RecipeDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  return <RecipeDetailRouteView id={id} />;
};

export default RecipeDetailPage;
