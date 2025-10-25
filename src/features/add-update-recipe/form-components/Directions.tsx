'use client';

import * as React from 'react';
import { Box, Typography, Paper, TextField, IconButton, Stack } from '@mui/material';
import { Trash2 } from 'lucide-react';
import FlavourButton from '@components/FlavourButton';

type Props = {
  value: string[];
  onChange: (steps: string[]) => void;
  showErrors?: boolean;
};

export default function Directions({ value, onChange, showErrors }: Props) {
  const [steps, setSteps] = React.useState<string[]>(value.length ? value : ['']);

  React.useEffect(() => {
    setSteps(value.length ? value : ['']);
  }, [value]);

  const pushUp = (next: string[]) => {
    setSteps(next);
    onChange(next);
  };

  const addStep = () => pushUp([...steps, '']);

  const removeStep = (idex: number) => {
    if (idex === 0) return;
    const next = steps.filter((_, i) => i !== idex);
    pushUp(next);
  };

  const updateStep = (idex: number, text: string) => {
    const next = steps.map((s, i) => (i === idex ? text : s));
    pushUp(next);
  };

  return (
    <Paper variant="outlined" sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Directions
      </Typography>

      <Stack spacing={2}>
        {steps.map((text, idx) => {
          const isError = !!showErrors && text.trim() === '';
          return (
            <Box
              key={idx}
              sx={{ p: 1, borderRadius: 1, border: '1px solid', borderColor: 'divider' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Typography fontWeight="bold">Step {idx + 1}</Typography>
                {idx > 0 && (
                  <IconButton
                    aria-label="remove step"
                    size="small"
                    onClick={() => removeStep(idx)}
                    sx={{ ml: 'auto' }}
                  >
                    <Trash2 size={16} />
                  </IconButton>
                )}
              </Box>

              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Describe step..."
                value={text}
                onChange={(e) => updateStep(idx, e.target.value)}
                error={isError}
                helperText={isError ? 'This step cannot be empty.' : undefined}
              />
            </Box>
          );
        })}
      </Stack>

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
        <FlavourButton kind="primary" onClick={addStep}>
          Add Step
        </FlavourButton>
      </Box>
    </Paper>
  );
}
