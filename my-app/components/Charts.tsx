import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { analyticsData } from '@/data/analytics';

export const VisitsChart = () => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Daily Visits Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={analyticsData.dailyVisits}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visits" stroke="#8884d8" />
          <Line type="monotone" dataKey="uniqueUsers" stroke="#82ca9d" />
          <Line type="monotone" dataKey="pageViews" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const PopularPostsChart = () => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Popular Posts Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={analyticsData.popularPosts}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="views" fill="#8884d8" />
          <Bar dataKey="likes" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export const DeviceStatsChart = () => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Device Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={analyticsData.deviceStats}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }:any) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="users"
          >
            {analyticsData.deviceStats.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};