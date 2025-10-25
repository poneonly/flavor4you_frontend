'use client';

import React from 'react';
import { Pagination, Box } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
  totalItems: number;
  limitPerPage: number;
  onPageChange?: (page: number) => void;
};

export default function PaginationComponent({ totalItems, limitPerPage }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / limitPerPage);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Lấy page hiện tại từ query, mặc định = 1
  const currentPage = Number(searchParams.get('page')) || 1;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', value.toString());
    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          '& .MuiPaginationItem-root': {
            color: 'primary',
            '&.Mui-selected': {
              backgroundColor: 'var(--color-primary)',
              color: '#fff',
            },
          },
        }}
      />
    </Box>
  );
}
