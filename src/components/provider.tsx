'use client';
import { BaseProps } from '@/types/base';
import { ThemeProvider } from 'next-themes';

const Provider = ({ children }: BaseProps) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      storageKey="theme"
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
