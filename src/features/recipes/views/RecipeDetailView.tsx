import React from 'react';
import RecipeDetail from '../logic/[id]/RecipeDetail';
import { RecipeDetailViewProps } from '@/types/recipe';
import ContainerLayout from '@layouts/ContainerLayout';

const RecipeDetailView: React.FC<RecipeDetailViewProps> = ({ recipe }) => {
  return (
    <ContainerLayout>
      <RecipeDetail recipe={recipe} />
    </ContainerLayout>
  );
};

export default RecipeDetailView;
