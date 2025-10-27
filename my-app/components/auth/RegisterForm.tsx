'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '../toast';
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

const formSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Please enter a valid email' }),
    password: z.string().min(1, { message: 'Password is required' }),
    confirmPassword: z.string().min(1, { message: 'Confirm Password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

type FormData = z.infer<typeof formSchema>;

const RegisterForm: React.FC = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {toast} = useToast();
  const onSubmit = (data: FormData) => {
     toast({ title: "Regiser successfully" ,
       description:`Welcome ${data.name}` })
    console.log('Register data:', data);
    router.push('/');
  };   

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto' }}>
      <CardHeader
        title={<Typography variant="h5">Register</Typography>}
        subheader="Sign up by adding the info below"
      />
      <CardContent>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name */}      
          <Controller
            name="name"
            control={control}
            render={({ field }) => (   //  lunch  field with all filed inside object
            // ,,destructuring field from render props
              <TextField    
                {...field}
                label="Name"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.name} //  expect true or false  then the helper  
                helperText={errors.name?.message}
              />   
            )}  
          />

          {/* Email */}
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

          {/* Password */}
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

          {/* Confirm Password */}
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
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
              Sign Up
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
