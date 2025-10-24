'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextField, Button, Box, Typography } from '@mui/material';
import posts from '@/data/posts';
import LeftArrowBtn from '@/components/ArrowLeftBtn/LeftArrowBtn';
import { useToast } from '@/components/use-toast';

const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  body: z.string().min(1, { message: 'Body is required' }),
  author: z.string().min(1, { message: 'Author is required' }),
  date: z.string().min(1, { message: 'Date is required' }),
});

interface PostEditPageProps {
  params: {
    id: string;
  };
}

const PostEditPage = ({ params }: PostEditPageProps) => {
  const { toast } = useToast() as any;

  const post = posts.find((post) => post.id === params.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
      author: post?.author || '',
      date: post?.date || '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: 'Post has been updated successfully',
      description: `Updated by ${post?.author} on ${post?.date}`,
    });
  };

  return (
    <>
      <LeftArrowBtn text="Back To Posts" link="/posts" />
      <Typography variant="h5" sx={{ mb: 3 }}>
        Edit Post
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          maxWidth: 500,
        }}
      >
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          {...register('title')}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <TextField
          label="Body"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          {...register('body')}
          error={!!errors.body}
          helperText={errors.body?.message}
        />

        <TextField
          label="Author"
          variant="outlined"
          fullWidth
          {...register('author')}
          error={!!errors.author}
          helperText={errors.author?.message}
        />

        <TextField
          label="Date"
          variant="outlined"
          fullWidth
          {...register('date')}
          error={!!errors.date}
          helperText={errors.date?.message}
        />

        <Button type="submit" variant="contained" fullWidth>
          Update Post
        </Button>
      </Box>
    </>
  );
};

export default PostEditPage;
