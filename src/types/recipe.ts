export type Ingredient = {
  ingredientName: string;
  quantity: string;
};

export type RecipeStep = string;

export type Recipe = {
  id: number;
  title: string;
  description: string;
  cookingTime: number;
  servings: number;
  difficulty: string;
  recipeImages: string;
  categories: string[];
  views: number;
  rating: number;
  author: string;
  ingredients: Ingredient[];
  steps: string[];
};


export interface RecipeDetailProps {
    recipe: Recipe;
}

export interface RecipeDetailViewProps {
    recipe: Recipe;
}
