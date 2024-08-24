'use server';

import { auth, signOut } from '@/auth';
import { sql } from '@/db/postgres';
import { revalidatePath, unstable_noStore } from 'next/cache';
import { Resend } from 'resend';

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

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(email: string, body: string) {
  const { data } = await resend.emails.send({
    from: `${email} <onboarding@resend.dev>`,
    to: ['aungpyaephyo1412@proton.me'],
    subject: 'Guestbook',
    text: `Email : ${email}\n\nBody : ${body}`,
  });
  return data;
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

  await sendMail(email, body);
  console.log('Email sent');
}
