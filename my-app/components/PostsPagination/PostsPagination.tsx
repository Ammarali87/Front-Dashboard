'use client';

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PostsPagination: React.FC = ({mypage,totalPages ,onPageChange}:any) => {
  const [page, setPage] = React.useState(1);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
      <IconButton
        onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
        disabled={page === 1}
      >
        <ChevronLeft size={20} />
      </IconButton>

      <Pagination
        count={10} // عدد الصفحات
        page={page}
        onChange={handleChange}
        color="primary"
        shape="rounded"
        siblingCount={1}
        boundaryCount={1}
      />

      <IconButton
        onClick={() => setPage((prev) => (prev < 10 ? prev + 1 : prev))}
        disabled={page === 10}
      >
        <ChevronRight size={20} />
      </IconButton>
    </Stack>
  );
};

export default PostsPagination;
