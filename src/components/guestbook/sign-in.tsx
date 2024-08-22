'use client';

import Github from '@/components/icons/github';
import Google from '@/components/icons/social/google';
import { signIn } from 'next-auth/react';

const login = async (provider: 'github' | 'google') => {
  await signIn(provider, { callbackUrl: '/guestbook' });
};

const SignIn = () => {
  return (
    <div className='w-fit grid md:grid-cols-2 gap-5'>
      <button
        className='px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100'
        onClick={async () => await login('github')}
      >
        <Github />
        <div className='ml-3'>Sign in with GitHub</div>
      </button>
      <button
        className='px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100'
        onClick={async () => await login('google')}
      >
        <Google />
        <div className='ml-3'>Sign in with Google</div>
      </button>
    </div>
  );
};

export default SignIn;
