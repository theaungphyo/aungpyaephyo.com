'use server';

import { auth, signOut } from '@/auth';
import { sql } from '@/db/postgres';
import { revalidatePath, unstable_noStore } from 'next/cache';

export const logout = async () => {
  await signOut({ redirectTo: '/guestbook' });
};

export async function getGuestbookEntries() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  unstable_noStore();
  return sql`
    SELECT id, body, created_by, updated_at
    FROM guestbook
    ORDER BY created_at DESC
    LIMIT 100
  `;
}
export async function saveGuestbookEntry(formData: FormData) {
  let session = await auth();
  let email = session?.user?.email as string;
  let created_by = session?.user?.name as string;

  if (!session?.user) {
    throw new Error('Unauthorized');
  }

  let entry = formData.get('entry')?.toString() || '';
  let body = entry.slice(0, 500);

  await sql`
    INSERT INTO guestbook (email, body, created_by, created_at)
    VALUES (${email}, ${body}, ${created_by}, NOW())
  `;

  revalidatePath('/guestbook');

  // let data = await fetch('https://api.resend.com/emails', {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `Bearer ${process.env.RESEND_SECRET}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     from: 'guestbook@leerob.io',
  //     to: 'me@leerob.io',
  //     subject: 'New Guestbook Entry',
  //     html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
  //   }),
  // });

  // let response = await data.json();
  console.log('Email sent');
}
