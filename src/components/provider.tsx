'use client';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BaseProps } from '@/types/base';
import { ThemeProvider } from 'next-themes';

const Provider = ({ children }: BaseProps) => {
  return (
    <ThemeProvider
      storageKey='theme'
      attribute='class'
      defaultTheme='system'
      enableSystem
    >
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
};

export default Provider;
