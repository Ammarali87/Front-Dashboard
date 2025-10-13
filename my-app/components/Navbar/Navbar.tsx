// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import Icon from '@/public/icon';


//       //  to path add #  id not #
// const navItems = [
//   { path: '/', name: 'Home', id: 'home' },
//   { path: '/#about', name: 'About', id: 'about' },
//   { path: '/#contact', name: 'Contact', id: 'contact' },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [activeId, setActiveId] = useState('home');

//   // Effect to handle scroll position and set active nav item
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveId(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     navItems.forEach((item) => {
//       const section = document.getElementById(item.id);
//       if (section) observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//             {/* <Image src="/amar.png" alt="logo" width={40} height={40} className="rounded-full" /> */}
//              {/* <Icon name="halfCircle" size={40} color="#e91e63" /> */}
    
//       <nav className="w-full bg-[#003888] text-white shadow-md fixed top-0 left-0 z-[9999] scroll-smooth">
//         <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
//           {/* Logo */}
//           <Link href="/" className="flex items-center cursor-pointer gap-2">
//              <Icon name="hat" fallback="hat" size={40} color="#0070f3" />
//             <span className="font-bold hover:text-yellow-300 transition text-xl">Dashboard</span>
//           </Link>

//           {/* Desktop menu */}
//           <ul className="hidden md:flex gap-8 font-semibold">
//             {navItems.map(({ path, name, id }) => (
//               <li key={name} className="group relative">
//                 <Link
//                   href={path}
//                   className={`transition-colors duration-300 ${
//                     activeId === id ? 'text-yellow-300' : 'hover:text-yellow-300'
//                   }`}
//                   scroll={true}
//                 >
//                   {name}
//                 </Link>
//                 <span
//                   className={`absolute bottom-[-4px] left-0 h-[2px] bg-yellow-300 transition-all duration-300 ${
//                     activeId === id ? 'w-full' : 'w-0 group-hover:w-full'
//                   }`}
//                 ></span>
//               </li>
//             ))}
//           </ul>

//           {/* Hamburger menu icon */}
//           <button
//             className="md:hidden flex flex-col gap-1"
//             aria-label="Toggle menu"
//             onClick={() => setOpen((prev) => !prev)}
//           >
//             <span className={`block w-7 h-1 bg-white rounded transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
//             <span className={`block w-7 h-1 bg-white rounded transition-all ${open ? 'opacity-0' : ''}`}></span>
//             <span className={`block w-7 h-1 bg-white rounded transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <div
//           className={`md:hidden bg-[#003888] transition-all duration-300 overflow-hidden ${
//             open ? 'max-h-60 py-2' : 'max-h-0 py-0'
//           }`}
//         >
//           <ul className="flex flex-col gap-4 px-6">
//             {navItems.map(({ path, name, id }) => (
//               <li key={name}>
//                 <Link
//                   href={path}
//                   className={`block py-2 px-3 rounded transition ${
//                     activeId === id
//                       ? 'text-yellow-300'
//                       : 'hover:bg-white/10 hover:text-yellow-300'
//                   }`}
//                   scroll={true}
//                   onClick={() => setOpen(false)}
//                 >
//                   {name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       {/* Spacer to prevent content being hidden behind navbar */}
//       <div className="mb-14" />
//     </>
//   );
// }











'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/public/icon';
import Image from 'next/image';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { path: '/', name: 'Home', id: 'home' },
  { path: '/#about', name: 'About', id: 'about' },
  { path: '/#contact', name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Scroll observer to highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }  
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
            //  currentTArte vs Event.Target.value
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-[#003888] text-white shadow-md fixed top-0 left-0 z-[9999]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer gap-2">
            <Icon name="hat" fallback="hat" size={40} color="#0070f3" />
            <span className="font-bold hover:text-yellow-300 transition text-xl">
              Dashboard
            </span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-8 font-semibold">
            {navItems.map(({ path, name, id }) => (
              <li key={name} className="group relative">
                <Link
                  href={path}
                  className={`transition-colors duration-300 ${
                    activeId === id ? 'text-yellow-300' : 'hover:text-yellow-300'
                  }`}
                  scroll={true}
                >
                  {name}
                </Link>
                <span
                  className={`absolute bottom-[-4px] left-0 h-[2px] bg-yellow-300 transition-all duration-300 ${
                    activeId === id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </li>
            ))}
          </ul>

    {/* bgcolor: '#1976d2',
                  fontSize: 14,
                }}
              >
                <Image src="/amar.png" alt="logo" width={40} height={40} className="rounded-full" />
 */}


          {/* Avatar + MenuIcon (mobile) */}
          <div className="md:hidden">
            <IconButton
              aria-label="menu"
              onClick={handleMenuClick}
              sx={{ color: 'white' }}
            >
              <Avatar 
                src="/amar.png"
                sx={{
                  width: 32,
                  height: 32,
                }}
              />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1,
                    bgcolor: '#003888',
                    color: 'white',
                    borderRadius: '10px',
                  },
                },
              }}
            >
              {navItems.map(({ path, name, id }) => (
                <MenuItem
                  key={id}
                  onClick={handleMenuClose}
                  sx={{
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', color: '#FFD700' },
                  }}
                >
                  <Link href={path}>{name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content being hidden behind navbar */}
      <div className="mb-14" />
    </>
  );
}
