'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import {  z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/components/toast';

import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

type FormData = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  const router = useRouter();
  
  const {    
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },  
  });
   

  const onSubmit = (data: FormData) => {
    console.log('Login data:', data);
         toast.success("Post updated successfully")
        router.push('/');
  }; 

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto' }}>
      <CardHeader
        title={<Typography variant="h5">Login</Typography>}
        subheader="Log into your account with your credentials"
      />
      <CardContent>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          {/* Password Field */}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />

          <CardActions sx={{ p: 0, pt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Sign In
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
