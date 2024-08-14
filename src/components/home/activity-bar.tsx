'use client';
import SectionTitle from '@/components/section-title';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const ActivityBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className='py-8'>
      <SectionTitle title={'My Github Activity'} />
      <ScrollArea className='pb-3'>
        <GitHubCalendar
          username='aungpyaephyo1412'
          blockSize={9.9}
          colorScheme={theme === 'light' ? 'light' : 'dark'}
          theme={{
            dark: ['#333333', '#4CAF50', '#81C784', '#A5D6A7', '#C8E6C9'],
            light: ['#EBEDF0', '#C6E48B', '#7BC96F', '#239A3B', '#196127'],
          }}
        />
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    </div>
  );
};

export default ActivityBar;
