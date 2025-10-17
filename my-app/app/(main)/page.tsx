'use client';

import DashboardCard from "@/components/Dashboard/DashboardCard";
import PostsTable from "@/components/Posts/Posts";
import LeftArrowBtn from "@/components/ArrowLeftCircle/leftArrowBtn";
import { User, Newspaper, Bell } from 'lucide-react';
// https://www.dating.com/en/people/#referrer=https%3A%2F%2Fwww.dating.com%2F&registration=false&token=46ff74d719fd57b838699d2f0a751965&authorizationmethod=signin%3Atoken


export default function Home() {
  return (
    // <main className="flex flex-col items-center
    //  justify-center min-screen bg-gray-100 dark:text-slate-200 p-8">
    //   <div className="flex flex-col md:flex-row
    //  items-center justify-center relative z-50 mb-8 h-screen mt-3 md:mt-[-22px]">
     <main className="flex flex-col min-h-screen bg-gray-100 dark:text-slate-200">
  <div className="flex flex-col md:flex-row items-top justify-center flex-grow p-8">

         <div className="flex  flex-wrap gap-5">
          <DashboardCard 
            title="Dashboard" 
            count={0} 
            icon={<span>📊</span>} 
          />
          <DashboardCard
            title="Users"
            count={120}
            icon={<User size={50} className="text-gray-500" />}
          />
          <DashboardCard
            title="Notifications"
            count={15}
            icon={<Bell size={50} className="text-red-500" />}
          />
          <Newspaper size={72} className="text-slate-500" />
        </div>

        </div>
        <div className="mt-3 md:mt-0 md:ml-10  max-w-[400px]">
          <PostsTable />
      </div>
    </main>
  );
}
