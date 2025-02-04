import { TooltipProvider } from '@/components/ui/tooltip';
import { BaseProps } from '@/types/base';
import { AptabaseProvider } from '@aptabase/react';
import { ThemeProvider } from 'next-themes';

const Provider = ({ children }: BaseProps) => {
  return (
    <AptabaseProvider appKey={process.env.APTABASE_API_KEY!}>
      <ThemeProvider
        disableTransitionOnChange
        storageKey='theme'
        attribute='class'
        defaultTheme='system'
        enableSystem
      >
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </AptabaseProvider>
  );
};

export default Provider;
