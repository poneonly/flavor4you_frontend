import React from "react";
import Link from "next/link";
import ContainerLayout from "@layouts/ContainerLayout";
import data from "features/recipes/data/mock_data.json";
import { RECIPE_DETAIL_PATH } from "const/path";

const RecipesList: React.FC = () => {
  return (
      <div className="min-h-screen bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">All Recipes</h1>
            <p className="text-xl text-gray-600">Discover amazing recipes from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((recipe) => (
              <Link
                key={recipe.id}
                href={RECIPE_DETAIL_PATH(recipe.id)}
                className="bg-white rounded-xl shadow-sm border-2 border-gray-200 hover:border-[#F8B25B] hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="p-6">
                  <div className="bg-gradient-to-br from-[#F8B25B]/20 to-[#F8B25B]/40 h-48 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#F8B25B]/30 group-hover:to-[#F8B25B]/50 transition-colors">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🍽️</div>
                      <span className="text-gray-600 text-sm">Recipe Image</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#F8B25B] transition-colors">{recipe.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>⏱️ {recipe.time}</span>
                    <span>👤 {recipe.author}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {recipe.category.slice(0, 2).map((category, index) => (
                      <span
                        key={index}
                        className="bg-[#F8B25B]/20 text-black text-xs font-medium px-2 py-1 rounded-full border border-[#F8B25B]/30"
                      >
                        {category}
                      </span>
                    ))}
                    {recipe.category.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                        +{recipe.category.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
  );
};

export default RecipesList;


