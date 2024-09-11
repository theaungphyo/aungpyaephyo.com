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
    <div className='w-full flex text-sm lowercase opacity-60 gap-2'>
      <span className='block w-[62px] whitespace-nowrap'>
        {date ? (
          <span>
            {date}
            <span className="before:px-1 before:content-['•']">yangon</span>
          </span>
        ) : (
          'loading...'
        )}
      </span>
    </div>
  );
};

export default Metadata;
