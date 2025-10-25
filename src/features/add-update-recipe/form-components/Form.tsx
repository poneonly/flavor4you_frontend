'use client';

import * as React from 'react';
import { Box, Container, Stack } from '@mui/material';
import FlavourButton from '@components/FlavourButton';
import { useRouter } from 'next/navigation';

import BasicInformation from './BasicInformation';
import UploadImage from './UploadImage';
import Ingredients from './Ingredients';
import Directions from './Directions';
import Details from './Details';

import { BasicInformationValue, DetailsValue } from '@/types/form';

import { Ingredient, Recipe } from '@/types/recipe';

type Errors = {
  basic?: { title?: string; description?: string; categories?: string };
  ingredients?: string;
  details?: { cookTime?: string; servings?: string; difficulty?: string };
  steps?: string;
  image?: string;
};

export default function Form() {
  const router = useRouter();

  const [basic, setBasic] = React.useState<BasicInformationValue>({
    title: '',
    description: '',
    categories: [],
  });
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [steps, setSteps] = React.useState<string[]>([]);
  const [details, setDetails] = React.useState<DetailsValue>({
    cookTime: '',
    servings: '',
    difficulty: '',
  });
  const [image, setImage] = React.useState<string>('');
  const [errors, setErrors] = React.useState<Errors>({});
  const [submitted, setSubmitted] = React.useState(false);

  const validate = () => {
    const next: Errors = {};
    if (!basic.title) (next.basic ??= {}).title = 'Required';
    if (!basic.description) (next.basic ??= {}).description = 'Required';
    if (!basic.categories.length) (next.basic ??= {}).categories = 'Required';
    if (!ingredients.length) next.ingredients = 'At least one ingredient required';
    if (!steps.length) next.steps = 'At least one step required';
    if (!details.cookTime) (next.details ??= {}).cookTime = 'Required';
    if (!details.servings) (next.details ??= {}).servings = 'Required';
    if (!details.difficulty) (next.details ??= {}).difficulty = 'Required';
    if (!image) next.image = 'Image required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async () => {
    setSubmitted(true);
    if (!validate()) return;

    const payload: Omit<Recipe, 'id' | 'views' | 'rating' | 'author'> = {
      title: basic.title.trim(),
      description: basic.description.trim(),
      categories: basic.categories,
      cookingTime: Number(details.cookTime),
      servings: Number(details.servings),
      difficulty: details.difficulty,
      recipeImages: image,
      ingredients,
      steps,
    };

    try {
      const res = await fetch('/api/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok && data?.id) {
        router.push(`/recipes/${data.id}`);
      } else {
        alert('Save failed: ' + JSON.stringify(data));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack spacing={4}>
        <BasicInformation value={basic} onChange={setBasic} errors={errors.basic} />
        <UploadImage value={image} onChange={setImage} />
        <Ingredients
          value={ingredients}
          onChange={setIngredients}
          showErrors={submitted}
          errorText={errors.ingredients}
        />
        <Directions value={steps} onChange={setSteps} showErrors={submitted} />
        <Details value={details} onChange={setDetails} errors={errors.details} />
      </Stack>
      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center', gap: 3 }}>
        <FlavourButton kind="primary" onClick={handleSubmit}>
          Publish Recipe
        </FlavourButton>
      </Box>
    </Container>
  );
}
