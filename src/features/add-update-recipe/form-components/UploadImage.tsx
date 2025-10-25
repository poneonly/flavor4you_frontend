'use client';

import * as React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import FlavourButton from '@components/FlavourButton';

type Props = {
  value: string;
  onChange: (url: string) => void;
};

export default function UploadImage({ value, onChange }: Props) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [loading, setLoading] = React.useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      onChange(data.url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper variant="outlined" sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Upload Recipe Image
      </Typography>

      <Box
        sx={{
          border: '2px dashed #ccc',
          borderRadius: 2,
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => fileInputRef.current?.click()}
      >
        <FlavourButton kind="secondary">{loading ? 'Uploading...' : 'Upload Image'}</FlavourButton>
        <input type="file" hidden ref={fileInputRef} onChange={handleUpload} accept="image/*" />
      </Box>

      {value && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Current image:
          </Typography>
          <Box
            component="img"
            src={value}
            alt="recipe"
            sx={{ mt: 1, width: '100%', maxHeight: 220, objectFit: 'cover', borderRadius: 1 }}
          />
        </Box>
      )}
    </Paper>
  );
}
