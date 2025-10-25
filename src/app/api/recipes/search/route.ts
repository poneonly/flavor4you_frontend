import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const recipesFile = path.join(process.cwd(), 'public', 'recipes.json');

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const keyword = (searchParams.get('search') || '').toLowerCase();

  const raw = fs.readFileSync(recipesFile, 'utf8');
  const recipes = JSON.parse(raw);

  const filtered = recipes.filter((r: any) => {
    const words = r.title.toLowerCase().split(/\s+/);
    return words.some((w: string) => w.startsWith(keyword));
    });

  return NextResponse.json(filtered);
}
