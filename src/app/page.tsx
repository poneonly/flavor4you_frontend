import CategoriesShowcase from '@components/home/CategoriesShowcase';
import FeaturedRecipes from '@components/home/FeaturedRecipes';
import HeroSection from '@components/home/HeroSection';
import RandomRecipe from '@components/home/RandomRecipe';
import TrendingRecipes from '@components/home/TrendingRecipes';
import RecipeOfTheDay from '@components/home/RecipeOfTheDay';
import ChefSpotlight from '@components/home/ChefSpotlight';
import TestimonialsSection from '@components/home/TestimonialsSection';
import NewsletterSubscribe from '@components/home/NewsletterSubscribe';
import ContainerLayout from '@layouts/ContainerLayout';

export const metadata = {
  title: 'Flavor4You - Discover Delicious Recipes',
  description:
    'Explore a world of culinary delights with Flavor4You. Find recipes, cooking tips, and more to satisfy your taste buds.',
};

export default function HomePage() {
  return (
    <ContainerLayout>
      <main className="flex flex-col">
        <HeroSection />
        <TrendingRecipes />
        <FeaturedRecipes />
        <CategoriesShowcase />
        <ChefSpotlight />
        <TestimonialsSection />
        <NewsletterSubscribe />
      </main>
    </ContainerLayout>
  );
}
