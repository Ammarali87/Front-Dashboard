'use client';

import Link from 'next/link';
import posts from '@/data/Posts';
import { Post,PostsTableProps } from '@/types/Posts';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from '@mui/material';

import { Edit } from 'lucide-react';


const PostsTable = ({ limit, title }: PostsTableProps) => {
  // Sort posts in descending order based on date
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter posts to limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography
        variant="h5"
        component="h3"
        sx={{ mb: 2, fontWeight: 600, p: 2 }}
      >
        {title ? title : 'Posts'}
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Title</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Author</TableCell>
            <TableCell sx={{ fontWeight: 600, textAlign: 'right' }}>Date</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell align="right">{post.date}</TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<Edit size={16} />}
                  >
                    Edit
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostsTable;
