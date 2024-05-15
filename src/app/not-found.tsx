import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex  w-full flex-1 flex-col items-center justify-center dark:text-white'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
        <p>
          Maybe you misspelled the link. Maybe something existed here, or it
          didn&apos;t exist in the first place...
        </p>
        <p>Maybe I should&apos;ve used a debugger instead of just logging...</p>
        <Link className='text-blue-500' href='/'>
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
