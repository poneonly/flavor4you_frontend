'use client';

import * as React from 'react';
import { Box, TextField, Typography, Paper } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { BasicInformationValue, BasicInformationErrors } from '@/types/form';

type Props = {
  value: BasicInformationValue;
  onChange: (v: BasicInformationValue) => void;
  errors?: BasicInformationErrors;
};

const filter = createFilterOptions<string>();

export default function BasicInformation({ value, onChange, errors }: Props) {
  const { title, description, categories } = value;
  const [options, setOptions] = React.useState<string[]>([]);

  React.useEffect(() => {
    fetch('/categories.json')
      .then((res) => res.json())
      .then((data) => {
        setOptions(data.map((c: any) => c.name));
      })
      .catch(console.error);
  }, []);

  const handleCategoriesChange = async (newValue: string[]) => {
    const newItems = newValue.filter(
      (c) => !options.some((opt) => opt.toLowerCase() === c.toLowerCase())
    );
    if (newItems.length) {
      for (const name of newItems) {
        await fetch('/api/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name }),
        });
      }
      const res = await fetch('/api/categories');
      const data = await res.json();
      setOptions(data.map((c: any) => c.name));
    }
    onChange({ ...value, categories: newValue });
  };

  return (
    <Paper variant="outlined" sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Basic Information
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          fullWidth
          label="Recipe Name"
          value={title}
          onChange={(e) => onChange({ ...value, title: e.target.value })}
          error={!!errors?.title}
          helperText={errors?.title}
        />

        <TextField
          fullWidth
          label="Description"
          multiline
          rows={2}
          value={description}
          onChange={(e) => onChange({ ...value, description: e.target.value })}
          error={!!errors?.description}
          helperText={errors?.description}
        />

        <Autocomplete
          multiple
          freeSolo
          options={options}
          value={categories}
          filterOptions={(opts, params) => {
            const filtered = filter(opts, params);
            const { inputValue } = params;
            if (
              inputValue !== '' &&
              !opts.some((opt) => opt.toLowerCase() === inputValue.toLowerCase())
            ) {
              filtered.push(inputValue);
            }
            return filtered;
          }}
          onChange={(_, newValue) => handleCategoriesChange(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Categories"
              error={!!errors?.categories}
              helperText={errors?.categories}
            />
          )}
        />
      </Box>
    </Paper>
  );
}
