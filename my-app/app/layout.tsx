import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Toaster } from "../components/toast";
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Dashboard app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider >
          {children}
        <Toaster/>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

 