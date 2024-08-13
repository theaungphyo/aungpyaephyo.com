import Section from '@/components/section';
import ConnectLinks from '@/db/connect-link';

const Connect = () => {
  return (
    <Section heading='Connect' headingAlignment='left'>
      <ul className='animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2 group'>
        {ConnectLinks.sort((a, b) => a.label.localeCompare(b.label)).map(
          (link) => (
            <li
              className='group lg:hover:!opacity-100 lg:group-hover/link:opacity-50 transition-all col-span-1'
              key={link.label}
            >
              <a
                rel='noreferrer'
                target={'_blank'}
                href={link.href}
                className='inline-grid w-full rounded-lg bg-[#F9F9F9] dark:bg-[#191919] p-4 no-underline transition-opacity '
              >
                <div className='flex items-center gap-3'>
                  <span className='size-7 rounded-full grid items-center project-card'>
                    {link.icon}
                  </span>
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
              </a>
            </li>
          )
        )}
      </ul>
    </Section>
  );
};

export default Connect;
