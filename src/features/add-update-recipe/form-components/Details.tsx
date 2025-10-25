'use client';

import * as React from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { DetailsValue, DetailsErrors } from '@/types/form';

type Props = {
  value: DetailsValue;
  onChange: (v: DetailsValue) => void;
  errors?: DetailsErrors;
};

export default function Details({ value, onChange, errors }: Props) {
  const { cookTime, servings, difficulty } = value;

  return (
    <Paper variant="outlined" sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Recipe Details
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <TextField
          label="Cook Time (minutes)"
          type="number"
          sx={{ flex: 1, minWidth: 200 }}
          value={cookTime}
          onChange={(e) => onChange({ ...value, cookTime: e.target.value })}
          error={!!errors?.cookTime}
          helperText={errors?.cookTime}
          inputProps={{ min: 0 }}
        />
        <TextField
          label="Servings (people)"
          type="number"
          sx={{ flex: 1, minWidth: 200 }}
          value={servings}
          onChange={(e) => onChange({ ...value, servings: e.target.value })}
          error={!!errors?.servings}
          helperText={errors?.servings}
          inputProps={{ min: 1 }}
        />

        <FormControl sx={{ flex: 1, minWidth: 200 }} error={!!errors?.difficulty}>
          <InputLabel id="difficulty-label">Difficulty Level</InputLabel>
          <Select
            labelId="difficulty-label"
            label="Difficulty Level"
            value={difficulty}
            onChange={(e) => onChange({ ...value, difficulty: e.target.value as string })}
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </FormControl>
        {errors?.difficulty && (
          <Typography variant="caption" color="error" sx={{ ml: 1, mt: 0.5, width: '100%' }}>
            {errors.difficulty}
          </Typography>
        )}
      </Box>
    </Paper>
  );
}
