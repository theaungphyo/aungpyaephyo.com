'use client';

import { useEffect, useState } from 'react';

const Metadata = () => {
  const [date, setDate] = useState<string>();
  useEffect(() => {
    const timer = setInterval(() => {
      return setDate(
        new Intl.DateTimeFormat([], {
          timeZone: 'Asia/Yangon',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date())
      );
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='w-full flex text-sm lowercase opacity-60'>
      <span className='block w-[62px] whitespace-nowrap'>
        {date ?? 'loading...'}
      </span>
      <div className='flex gap-1.5'>
        <span>·</span>
        <a
          target='_blank'
          rel='noopener noreferrer nofollow'
          href='https://maps.apple.com/place?q=Barcelona&ll=41.3826807%2C2.1770239&auid=2262861905204318884&lsp=7618&address=Barcelona%2C%20Spain'
        >
          Yangon
        </a>
      </div>
    </div>
  );
};

export default Metadata;
