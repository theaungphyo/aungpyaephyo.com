import ConnectLinks from '@/components/connect-link';
import Gallery from '@/components/gallery';
import PageTitle from '@/components/page-title';
import Section from '@/components/section';
import { blurDataImage } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <PageTitle title={'About'} description={'A glimpse into me.'} />
      <div className='hidden md:block'>
        <Gallery />
      </div>
      <div className='w-full space-y-24'>
        <div className='relative flex md:hidden'>
          <div className='animate-in '>
            <Image
              blurDataURL={blurDataImage}
              src={'/about-4.jpg'}
              alt={'me and lily'}
              width={324}
              height={139}
              className='pointer-events-none h-60 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md'
              priority
            />
          </div>
          <div className='animate-in mt-5'>
            <Image
              blurDataURL={blurDataImage}
              src={'/about-1.JPG'}
              alt={'me and lily'}
              width={220}
              height={240}
              className='pointer-events-none  rotate-6 rounded-xl bg-gray-400 object-cover shadow-md w-56'
              priority
            />
          </div>
        </div>
        <Section heading='About' headingAlignment='left'>
          <div className='flex flex-col gap-6'>
            <p>
              Hi, I&apos;m Aung Pyae Phyo, born in Kyaukse and raised in
              Kyaukse, Mandalay, Myanmar. I have been coding for{' '}
              {new Date().getFullYear() - 2022} years. As a software Developer,
              I specialize in full-stack web development.
            </p>
            <p>
              In addition to coding, I create content on my{' '}
              <Link className='underline' href={'/blog'}>
                Blog
              </Link>{' '}
              , covering all things technology, coding vlogs, and personal
              development.
            </p>
            <p>
              When I&apos;m not at my desk, I am probably lifting weights,
              playing MOBA game, riding my e-bike, or at a local coffee shop :]
            </p>
          </div>
        </Section>
        <Section heading='Connect' headingAlignment='left'>
          <ul className='animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2 group/link'>
            {ConnectLinks.map((link) => (
              <li
                className='group lg:hover:!opacity-100 lg:group-hover/link:opacity-50 transition-all col-span-1'
                key={link.label}
              >
                <Link
                  href={link.href}
                  className='inline-grid w-full rounded-lg bg-[#F9F9F9] dark:bg-[#191919] p-4 no-underline transition-opacity '
                >
                  <div className='flex items-center gap-3'>
                    <span className='text-xl'>{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='ml-auto h-5 w-5 text-neutral-500 dark:text-neutral-200 '
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default Page;
