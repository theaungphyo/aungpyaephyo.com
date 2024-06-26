'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='pt-9 flex-1 flex justify-center flex-col'>
      <p>Oh no, something went wrong... maybe refresh?</p>
    </div>
  );
}
