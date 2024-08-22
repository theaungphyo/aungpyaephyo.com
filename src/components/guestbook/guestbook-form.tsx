'use client';

import { saveGuestbookEntry } from '@/app/guestbook/_action';
import SignOut from '@/components/guestbook/sign-out';
import { Input } from '@/components/ui/input';
import { useRef } from 'react';
import { useFormStatus } from 'react-dom';

const GuestbookForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        if (!formData.get('entry')) return;
        await saveGuestbookEntry(formData);
        formRef.current?.reset();
      }}
    >
      <div className='relative max-w-screen-sm mb-2'>
        <Input
          aria-label='Your message'
          placeholder='Your message...'
          name='entry'
          type='text'
          className='h-[2.5rem] border-2'
        />
        <div className='absolute inset-y-0 right-0 flex justify-center items-center py-2 pr-1'>
          <SubmitButton />
        </div>
      </div>
      <SignOut />
    </form>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className='flex items-center justify-center absolute right-1 top-1 px-2 py-1 font-medium h-8 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-16'
      disabled={pending}
      type='submit'
    >
      Sign
    </button>
  );
}

export default GuestbookForm;
