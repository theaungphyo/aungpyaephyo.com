'use client';
import { logout } from '@/app/guestbook/_action';

const SignOut = () => {
  return (
    <button
      type={'button'}
      className='text-xs font-semibold text-neutral-700 dark:text-neutral-200'
      onClick={async () => await logout()}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
