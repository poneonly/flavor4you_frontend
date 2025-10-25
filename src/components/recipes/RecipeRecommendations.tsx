'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Clock, Users } from 'lucide-react';
import { RECIPE_DETAIL_PATH } from 'const/path';
import { useRecipeRecommendations } from '../../features/recipes/logic/recommendations/useRecipeRecommendations';
import type { Recipe } from '@/types/recipe';

type RecipeRecommendationsProps = {
  currentRecipe: Recipe;
};

const RecipeRecommendations: React.FC<RecipeRecommendationsProps> = ({ currentRecipe }) => {
  const { recommendations } = useRecipeRecommendations({ currentRecipe, maxRecommendations: 6 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || recommendations.length <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, recommendations.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getVisibleRecipes = () => {
    const recipes = [];
    const visibleCount = Math.min(3, recommendations.length);

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % recommendations.length;
      recipes.push(recommendations[index]);
    }
    return recipes;
  };

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <div className="relative">
        {recommendations.length > 3 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 w-10 h-10 flex items-center justify-center border-2 border-[#F8B25B] hover:bg-[#F8B25B]"
            >
              <ChevronLeft size={20} className="text-black hover:text-white transition-colors" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 w-10 h-10 flex items-center justify-center border-2 border-[#F8B25B] hover:bg-[#F8B25B]"
            >
              <ChevronRight size={20} className="text-black hover:text-white transition-colors" />
            </button>
          </>
        )}

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {getVisibleRecipes().map((recipe) => (
            <Link
              key={recipe.id}
              href={RECIPE_DETAIL_PATH(recipe.id)}
              className="bg-white rounded-xl shadow-sm border-2 border-gray-200 hover:border-[#F8B25B] hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-6">
                {/* Recipe Image */}
                <div className="h-48 w-full mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                  {recipe.recipeImages ? (
                    <img
                      src={recipe.recipeImages}
                      alt={recipe.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-4xl mb-2">🍽️</div>
                      <span className="text-gray-600 text-sm">No Image</span>
                    </div>
                  )}
                </div>

                {/* Recipe Info */}
                <h4 className="text-lg font-bold text-black mb-2 line-clamp-2 group-hover:text-[#F8B25B] transition-colors">
                  {recipe.title}
                </h4>
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{recipe.description}</p>

                {/* Recipe Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{recipe.cookingTime} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{recipe.author}</span>
                  </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-1">
                  {recipe.categories.slice(0, 2).map((category, catIndex) => (
                    <span
                      key={catIndex}
                      className="bg-[#F8B25B]/20 text-black text-xs font-medium px-2 py-1 rounded-full border border-[#F8B25B]/30"
                    >
                      {category}
                    </span>
                  ))}
                  {recipe.categories.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                      +{recipe.categories.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {recommendations.length > 3 && (
          <div className="flex justify-center gap-2 mt-6">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  currentIndex === index ? 'bg-[#F8B25B]' : 'bg-gray-300 hover:bg-[#F8B25B]/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeRecommendations;
