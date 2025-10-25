// RecipeDetail.tsx
'use client';

import React, { useState } from 'react';
import { Rating, Stack } from '@mui/material';
import { Recipe } from '@/types/recipe';
import RecipeRecommendations from '../../../../components/recipes/RecipeRecommendations';

type Props = {
  recipe: Recipe;
};

const RecipeDetail: React.FC<Props> = ({ recipe }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const rating = recipe.rating ?? 0;
  const totalReviews = recipe.views ?? 0;

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="mt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Recipe Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src={recipe.recipeImages}
                alt={recipe.title}
                className="h-[500px] w-full object-cover rounded-2xl shadow-lg"
              />
              <button
                onClick={toggleFavorite}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className={`text-2xl ${isFavorited ? 'text-red-500' : 'text-gray-400'}`}>
                  {isFavorited ? '❤️' : '🤍'}
                </span>
              </button>
            </div>
          </div>

          {/* Recipe Info */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{recipe.description}</p>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  <span className="text-gray-700 font-medium">{recipe.cookingTime} min</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👤</span>
                  <span className="text-gray-700 font-medium">By {recipe.author}</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 pl-5">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    value={rating}
                    precision={0.5}
                    readOnly
                    size="large"
                  />
                </Stack>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{rating}</div>
                  <div className="text-sm text-gray-500">({totalReviews} reviews)</div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pl-5">Categories</h3>
              <div className="flex flex-wrap gap-3 pl-5">
                {recipe.categories.map((cat, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 pl-5">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{recipe.author?.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Recipe by {recipe.author}</h4>
                  <p className="text-gray-600">Recipe Creator & Food Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border h-fit">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">🥘</span>
                Ingredients
              </h3>
              <ul className="space-y-3">
                {recipe.ingredients.map((ing, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-green-600 text-xl">•</span>
                    <span className="text-gray-700 font-medium">
                      {ing.ingredientName} - {ing.quantity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">👨‍🍳</span>
                Cooking Steps
              </h3>
              <ol className="space-y-6">
                {recipe.steps.map((step, index) => (
                  <li
                    key={index}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 pt3">
          <span className="text-3xl">🥘</span>
          Looking for something else?
        </h3>
        <RecipeRecommendations currentRecipe={recipe} />
      </div>
    </div>
  );
};

export default RecipeDetail;
