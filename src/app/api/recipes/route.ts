import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const recipesFile = path.join(process.cwd(), 'public', 'recipes.json');

// Get recipes
export async function GET() {
  const raw = fs.readFileSync(recipesFile, 'utf8');
  const recipes = JSON.parse(raw);
  return NextResponse.json(recipes);
}

// Create recipe
export async function POST(req: Request) {
  try {
    const recipe = await req.json();

    const raw = fs.readFileSync(recipesFile, 'utf8');
    const recipes = JSON.parse(raw);

    const newRecipe = {
      id: recipes.length ? recipes[recipes.length - 1].id + 1 : 1,
      views: 0,
      rating: 0,
      author: 'Anonymous',
      ...recipe,
    };

    recipes.push(newRecipe);

    fs.writeFileSync(recipesFile, JSON.stringify(recipes, null, 2));

    return NextResponse.json(newRecipe, { status: 201 });
  } catch (err: any) {
    console.error('Error writing recipes.json:', err);
    return NextResponse.json({ error: 'Cannot save recipe' }, { status: 500 });
  }
}
