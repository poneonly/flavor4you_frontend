'use client';

import * as React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type LimitSelectorProps = {
  value: number;
  onChange: (newLimit: number) => void;
  options?: number[];
};

export default function LimitSelector({
  value,
  onChange,
  options = [8, 12, 16, 20],
}: LimitSelectorProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(Number(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="limit-selector-label">Show</InputLabel>
        <Select
          labelId="limit-selector-label"
          value={value.toString()}
          label="Show"
          onChange={handleChange}
        >
          {options.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
