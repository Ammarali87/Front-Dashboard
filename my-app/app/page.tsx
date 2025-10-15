'use client';
import DashboardCard from "@/components/Dashboard/DashboardCard";
import { User ,Newspaper ,Bell} from 'lucide-react';

export default function Home() {
  return (
    <main className="flex divide-amber-500 dark:text-slate-200 min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className="flex  z-50 flex-col relative mb-8  md:flex-row items-center h-screen justify-center mt-3 md:mt-[-22px]">
          <div className="flex flex-wrap gap-5">

        <DashboardCard  title="Dashboard " count={0} icon={<span>📊</span>} />
        <DashboardCard
          title="Users"
          count={120}
          icon={<User size={50} color="gray" />}
          />   
              <DashboardCard
        title="Notifications"
        count={15}
        icon={<Bell size={50} color="red" />}
        />
      <Newspaper size={72}  text-slate-500 />
       
        </div>
      </div>

    </main>
  );
}



