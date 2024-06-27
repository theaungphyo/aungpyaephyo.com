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
        Yangon
      </div>
    </div>
  );
};

export default Metadata;
