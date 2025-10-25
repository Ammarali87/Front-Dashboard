'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { TextField, Button, Box, Typography } from '@mui/material'
import initialPosts from '@/data/posts'
import LeftArrowBtn from '@/components/ArrowLeftBtn/LeftArrowBtn'
import { useToast } from '@/components/use-toast'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  body: z.string().min(1, { message: 'Body is required' }),
  author: z.string().min(1, { message: 'Author is required' }),
  date: z.string().min(1, { message: 'Date is required' }),
})

interface PostEditPageProps {
  params: {
    id: string
  }
}
 import {Post } from "@/types/posts"
const PostEditPage = ({ params }: PostEditPageProps) => {
  const router = useRouter()
  const { addToast } = useToast()

  // Local state for posts (mocking DB)
  const [posts, setPosts] = useState<Post[]>(initialPosts)

  const post = posts.find((p) => p.id === params.id)

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
  })


const onSubmit = (data: z.infer<typeof formSchema>) => {
  const updatedPost: Post = { id: params.id, ...data }
   console.log("update post .....");
   
  setPosts((prev: Post[]) =>
    prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
  )

  addToast({
    title: 'Updated',
    description: `Post updated by ${updatedPost.author} on ${updatedPost.date}`,
    type: 'success',
  })

  router.refresh()
}

  if (!post) {
    return (
      <Typography color="error" variant="h6">
        Post not found
      </Typography>
    )
  }

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

        <Button   type="submit" variant="contained" fullWidth>
          Update Post
        </Button>
      </Box>
    </>
  )
}

export default PostEditPage
