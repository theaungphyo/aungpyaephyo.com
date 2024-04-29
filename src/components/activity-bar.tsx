'use client';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const ActivityBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <ScrollArea className='py-5'>
      <GitHubCalendar
        username='aungpyaephyo1412'
        blockSize={10}
        colorScheme={theme === 'light' ? 'light' : 'dark'}
        theme={{
          dark: ['#57606a', '#9BE9A8', '#40C463', '#40C463', '#216E39'],
          light: ['#EBEDF0', '#9BE9A8', '#40C463', '#40C463', '#216E39'],
        }}
      />
      <ScrollBar orientation={'horizontal'} />
    </ScrollArea>
  );
};

export default ActivityBar;
