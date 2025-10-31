'use client';

import DashboardCard from "@/components/Dashboard/DashboardCard";
import PostsTable from "@/components/Posts/Posts";
import { User, Newspaper, Bell } from 'lucide-react';
import Contact from "@/components/Contact/Contact"
import About from "@/components/About/About"



export default function Home() {
  return (
    <main>
      <section 
        id="home" 
        className="min-h-screen pt-20"
      >
        {/* Home content */}  Home  
      </section>

      <section 
        id="about" 
        className="min-h-screen pt-20"
      >
        {/* About content */} About 
      </section>

      <section 
        id="contact" 
        className="min-h-screen pt-20"
      >
        {/* Contact content */}  Contact 
      </section>
    </main>
  );
}


// export default function Home() {
//   return (
//     <main className="flex flex-col min-h-screen bg-gray-100 dark:text-slate-200">
//      <div className="flex flex-col md:flex-row items-top justify-center flex-grow p-8">

//          <div className="flex  flex-wrap gap-5">
//           <DashboardCard 
//             title="Dashboard" 
//             count={0} 
//             icon={<span>📊</span>} 
//           />
//           <DashboardCard
//             title="Users"
//             count={120}
//             icon={<User size={50} className="text-gray-500" />}
//           />
//           <DashboardCard
//             title="Notifications"
//             count={15}
//             icon={<Bell size={50} className="text-red-500" />}
//           />
//           <Newspaper size={72} className="text-slate-500" />
//         </div>

//         </div>
//         <div className="mt-3 md:mt-0 md:ml-10  max-w-[400px]">
//           <PostsTable />
//       </div>
//     </main>
//   );
// }

