'use client';

import * as React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthTabs: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 400, mx: 'auto' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>

      {value === 0 && (
        <Box sx={{ p: 2 }}>
          <LoginForm />
        </Box>
      )}
      {value === 1 && (
        <Box sx={{ p: 2 }}>
          <RegisterForm />
        </Box>
      )}
    </Box>
  );
};

export default AuthTabs;
