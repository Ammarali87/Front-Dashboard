'use client';

import { LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/public/icon';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';

const navItems = [
  { path: '/#home', name: 'Home', id: 'home' },
  { path: '/#about', name: 'About', id: 'about' },
  { path: '/#contact', name: 'Contact', id: 'contact' },
  { path: '/#auth', name: 'Login/Register', id: 'auth' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<String>('home');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { darkMode, toggleTheme } = useTheme();

  // Observe scroll position when user enter the section add Active to
  //  navitems 
  useEffect(() => {  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });   
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
  // to make sure the section exists before observe it.
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
   


  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
 


  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-[9999] shadow-md transition-colors duration-300
        ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#003888] text-white'}`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer gap-2">
            <Icon name="hat" fallback="hat" size={40} color={darkMode ? '#FFD700' : '#0070f3'} />
            <span className="font-bold hover:text-yellow-300 transition text-xl">
              Dashboard
            </span>
          </Link>

          {/* Desktop Menu */}
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

          {/* Right side: Avatar + Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <IconButton onClick={toggleTheme} color="inherit" sx={{ color: 'inherit' }}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>

            <IconButton onClick={handleMenuClick} sx={{ color: 'inherit' }}>
              <Avatar
                src="/amar.png"
                sx={{
                  width: 32,
                  height: 32,
                }}
              />
            </IconButton>
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:block">
            <IconButton onClick={toggleTheme} color="inherit" sx={{ color: 'inherit' }}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </div>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            slotProps={{
              paper: {
                sx: {
                  mt: 1,
                  bgcolor: darkMode ? '#1f2937' : '#003888',
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
                  '&:hover': {
                    bgcolor: darkMode
                      ? 'rgba(255,255,255,0.1)'
                      : 'rgba(255,255,255,0.2)',
                    color: '#FFD700',
                  },
                }}
              >
                <Link href={path}>{name}</Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </nav>

      {/* Spacer */}
      <div className="mb-14" />
    </>
  );
}

 