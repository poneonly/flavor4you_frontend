'use client';

import * as React from 'react';
import { Box, Typography, Paper, TextField, Chip, Stack } from '@mui/material';
import FlavourButton from '@components/FlavourButton';
import { Ingredient } from '@/types/recipe';

type Props = {
  value: Ingredient[];
  onChange: (list: Ingredient[]) => void;
  showErrors?: boolean;
  errorText?: string;
};

export default function Ingredients({ value, onChange, showErrors, errorText }: Props) {
  const [name, setName] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const addIngredient = () => {
    if (!name.trim() || !quantity.trim()) return;
    onChange([...value, { ingredientName: name.trim(), quantity: quantity.trim() }]);
    setName('');
    setQuantity('');
  };

  const removeIngredient = (idx: number) => {
    const next = [...value];
    next.splice(idx, 1);
    onChange(next);
  };

  return (
    <Paper variant="outlined" sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Ingredients
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
        <TextField
          label="Ingredient name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Quantity (e.g., 2 cups)"
          fullWidth
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <FlavourButton kind="primary" onClick={addIngredient} type="button">
          Add
        </FlavourButton>
      </Stack>

      {showErrors && !!errorText && (
        <Typography variant="caption" color="error" sx={{ mt: 1, display: 'block' }}>
          {errorText}
        </Typography>
      )}

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
        {value.map((ing, idx) => (
          <Chip
            key={`${ing.ingredientName}-${ing.quantity}-${idx}`}
            label={`${ing.quantity} ${ing.ingredientName}`}
            onDelete={() => removeIngredient(idx)}
          />
        ))}
      </Box>
    </Paper>
  );
}
