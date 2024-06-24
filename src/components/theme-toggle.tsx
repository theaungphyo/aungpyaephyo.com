'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='outline-none'
    >
      <Image
        src={'/logo.png'}
        alt={'logo'}
        width={35}
        height={35}
        className='object-contain'
        priority
      />
      <span className='sr-only'>Toggle theme</span>
    </button>
  );
}

export default ThemeToggle;
