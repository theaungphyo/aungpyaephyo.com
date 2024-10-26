const dynamic = 'force-dynamic';

import { getGuestbookEntries } from '@/app/guestbook/_action';
import { auth } from '@/auth';
import GuestbookForm from '@/components/guestbook/guestbook-form';
import SignIn from '@/components/guestbook/sign-in';
import PageTitle from '@/components/page-title';

export const metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook and leave your mark.',
};

const Page = async () => {
  const session = await auth();
  return (
    <section>
      <PageTitle title={'Sign my guestbook'} description={'Leave your mark'} />
      {session ? <GuestbookForm /> : <SignIn />}
      <GuestbookEntries />
    </section>
  );
};
async function GuestbookEntries() {
  let entries = await getGuestbookEntries();

  if (entries.length === 0) {
    return null;
  }

  return entries.map((entry) => (
    <div key={entry.id} className='flex flex-col space-y-1 my-5'>
      <div className='w-full text-sm break-words'>
        <span className='text-neutral-600 dark:text-neutral-400 mr-1'>
          {entry.created_by}:
        </span>
        {entry.body}
      </div>
    </div>
  ));
}

export default Page;
