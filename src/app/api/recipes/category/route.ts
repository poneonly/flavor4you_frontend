import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const recipesFile = path.join(process.cwd(), 'public', 'recipes.json');

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  const raw = fs.readFileSync(recipesFile, 'utf8');
  const recipes = JSON.parse(raw);

  const filtered =
    !category || category === 'All'
      ? recipes
      : recipes.filter((r: any) => r.categories.includes(category));

  return NextResponse.json(filtered);
}
