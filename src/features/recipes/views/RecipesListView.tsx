import React from 'react';
import ContainerLayout from '@layouts/ContainerLayout';
import RecipesList from '../logic/RecipesList';

const RecipesListView: React.FC = () => {
  return (
    <ContainerLayout>
      <RecipesList />
    </ContainerLayout>
  )
}

export default RecipesListView;