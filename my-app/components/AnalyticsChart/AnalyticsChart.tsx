'use client'

import  { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import {
  Box,    
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';

// 📝 Types
type AnalyticsDataPoint = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

type AnalyticsFilter = {
  value: keyof AnalyticsDataPoint;
  label: string;
};

// ✅ بيانات وهمية
const data: AnalyticsDataPoint[] = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
];    // user-view  ,,page-view ,,amount

const availableFilters: AnalyticsFilter[] = [
  { value: "uv", label: "Unique Visitors" },
  { value: "pv", label: "Page Views" },
  { value: "amt", label: "Amount" },
];

const AnalyticsChart: React.FC = () => {
  const [selection, setSelection] = 
  useState<keyof AnalyticsDataPoint>("pv");
   //  start from default pv  can change 
  const handleChange = (event: SelectChangeEvent<keyof AnalyticsDataPoint>) => {
    setSelection(event.target.value as keyof AnalyticsDataPoint);
  };   

  return (
    <Card sx={{ p: 2, width: "100%" }}>
      <CardHeader
        title={<Typography variant="h6">Analytics For This Year</Typography>}
        subheader={<Typography variant="body2"
           color="text.secondary">Views Per Month</Typography>}
      />    
      <CardActions>
        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel id="analytics-select-label">Filter</InputLabel>
          <Select    
            labelId="analytics-select-label"
            value={selection}
            label="Filter"
            onChange={handleChange}
          > 
              {availableFilters.map((filter) => (
              <MenuItem key={filter.value} value={filter.value}>
                {filter.label}    
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardActions>
              
      <CardContent>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line type="monotone" dataKey={selection} stroke="#1976d2" />
              <CartesianGrid stroke="text.disabled" />
              <XAxis dataKey="name" />
              <YAxis dataKey="Amar" />   
            </LineChart>
          </ResponsiveContainer>
        </Box>  
      </CardContent>
    </Card>
  );
};

export default AnalyticsChart;
