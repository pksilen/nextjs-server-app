import type { Metadata } from 'next';
import Links from '@/app/Links';
import './globals.css';
import classes from './layout.module.scss';
import ThemeProvider from './theme-provider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <header className={classes.header}>
            <nav className={classes.navigation}>
              <Links />
            </nav>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
