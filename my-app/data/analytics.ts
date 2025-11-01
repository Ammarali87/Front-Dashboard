import { AnalyticsItem } from '@/types/analytics';

const data: AnalyticsItem[] = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 2400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Sep',
    uv: 3500,
    pv: 1300,
    amt: 2210,
  },
  {
    name: 'Oct',
    uv: 3000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Nov',
    uv: 2000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Dec',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export default data;

export const analyticsData = {
  dailyVisits: [
    { date: '2023-01-01', visits: 4000, uniqueUsers: 2400, pageViews: 6800 },
    { date: '2023-01-02', visits: 3000, uniqueUsers: 1398, pageViews: 5200 },
    { date: '2023-01-03', visits: 2000, uniqueUsers: 9800, pageViews: 7800 },
    { date: '2023-01-04', visits: 2780, uniqueUsers: 3908, pageViews: 8900 },
    { date: '2023-01-05', visits: 1890, uniqueUsers: 4800, pageViews: 6300 },
    { date: '2023-01-06', visits: 2390, uniqueUsers: 3800, pageViews: 7200 },
    { date: '2023-01-07', visits: 3490, uniqueUsers: 4300, pageViews: 8100 },
  ],
  
  popularPosts: [
    { id: '1', title: 'React Best Practices', views: 1200, likes: 450 },
    { id: '2', title: 'NextJS 13 Features', views: 980, likes: 320 },
    { id: '3', title: 'TypeScript Tips', views: 850, likes: 280 },
    { id: '4', title: 'CSS Grid Guide', views: 750, likes: 200 },
  ],

  userEngagement: {
    comments: 2456,
    shares: 1234,
    bookmarks: 890,
    totalReads: 12500
  },

  deviceStats: [
    { device: 'Desktop', users: 5890 },
    { device: 'Mobile', users: 4350 },
    { device: 'Tablet', users: 1240 }
  ]
}