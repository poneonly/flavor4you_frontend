'use client';

import * as React from 'react';
import {
  Paper,
  InputBase,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Popper,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Recipe } from '@/types/recipe';
import { useRouter } from 'next/navigation';

type SearchBarProps = {
  isScrolled?: boolean;
  data: Recipe[];
  onSelect?: (recipe: Recipe) => void;
};

export default function SearchBar({ isScrolled = false, data, onSelect }: SearchBarProps) {
  const router = useRouter();
  const [keyword, setKeyword] = React.useState('');
  const [results, setResults] = React.useState<Recipe[]>([]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!keyword.trim()) {
      setResults([]);
      return;
    }
    const filtered = data.filter((r) =>
      r.title
        .toLowerCase()
        .split(/\s+/)
        .some((word) => word.startsWith(keyword.toLowerCase()))
    );

    setResults(filtered);
  }, [keyword, data]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = keyword.trim();
    if (query) {
      router.push(`/recipes?search=${encodeURIComponent(query)}`);
    } else {
      router.push(`/recipes`);
    }
    setResults([]);
    setKeyword('');
  };

  return (
    <div>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        ref={setAnchorEl}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 2,
          boxShadow: (t) => t.shadows[0],
          border: isScrolled ? '1px solid #555' : '1px solid #fff',
          bgcolor: isScrolled ? '#fff' : 'transparent',
          color: isScrolled ? '#555' : '#fff',
          transition: 'all 0.3s ease',
          height: { xs: 32, sm: 36, md: 42 },
          px: { xs: 1, sm: 1.5, md: 2 },
        }}
      >
        <InputBase
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search recipes..."
          inputProps={{ 'aria-label': 'search' }}
          sx={{
            flex: 1,
            fontSize: { xs: 13, sm: 14, md: 16 },
            color: 'inherit',
            '::placeholder': {
              color: 'inherit',
              opacity: 0.7,
            },
          }}
        />
        <Divider sx={{ height: '60%', mx: 1, borderColor: 'inherit' }} orientation="vertical" />
        <IconButton type="submit" aria-label="search" sx={{ color: 'inherit' }}>
          <SearchIcon fontSize="small" />
        </IconButton>
      </Paper>

      <Popper
        open={keyword.trim().length > 0}
        anchorEl={anchorEl}
        placement="bottom-start"
        modifiers={[
          {
            name: 'offset',
            options: { offset: [0, 8] },
          },
        ]}
        style={{ zIndex: 1300, width: anchorEl?.offsetWidth }}
      >
        <Paper sx={{ mt: 1, borderRadius: 2, boxShadow: 3 }}>
          {results.length > 0 ? (
            <List>
              {results.map((recipe) => (
                <ListItem key={recipe.id} disablePadding>
                  <ListItemButton onClick={() => onSelect?.(recipe)}>
                    <ListItemAvatar>
                      <Avatar src={recipe.recipeImages} alt={recipe.title} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={recipe.title}
                      secondary={`${recipe.cookingTime} min • ${recipe.author}`}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          ) : (
            <Box sx={{ p: 1, textAlign: 'center', color: 'text.secondary' }}>No result</Box>
          )}
        </Paper>
      </Popper>
    </div>
  );
}
