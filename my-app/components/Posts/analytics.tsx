import { VisitsChart, PopularPostsChart, DeviceStatsChart } from  '../Charts';
import {analyticsData} from "@/data/analytics"
const Analytics = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VisitsChart />
        <PopularPostsChart />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DeviceStatsChart />
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">User Engagement</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">Total Comments</p>
              <p className="text-2xl font-bold">{analyticsData.userEngagement.comments}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">Total Shares</p>
              <p className="text-2xl font-bold">{analyticsData.userEngagement.shares}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">Bookmarks</p>
              <p className="text-2xl font-bold">{analyticsData.userEngagement.bookmarks}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">Total Reads</p>
              <p className="text-2xl font-bold">{analyticsData.userEngagement.totalReads}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;