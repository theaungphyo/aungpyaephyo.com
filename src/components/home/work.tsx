import SectionTitle from '@/components/section-title';
import experiences from '@/db/experience';
import { blurDataImage } from '@/lib/utils';
import Image from 'next/image';
const Work = () => {
  return (
    <div className='pb-5'>
      <SectionTitle title={'Work'} />
      <div className='space-y-6'>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className='flex items-start md:items-center gap-3 transition hover:!opacity-100 group-hover:opacity-50'
          >
            <Image
              width={50}
              height={50}
              sizes={'50'}
              className='rounded object-cover shadow-logo object-center'
              src={experience.logo}
              alt={experience.company}
              priority
              blurDataURL={blurDataImage}
            />
            <div className='flex grow flex-col'>
              <a
                href={experience.companyLink ?? '#'}
                target={experience.companyLink ? '_blank' : '_top'}
                rel='noopener noreferrer'
                className='flex items-start flex-col gap-y-1 md:flex-row'
              >
                <div className='flex flex-col items-start grow'>
                  <p className='font-medium text-[16px]'>
                    {experience.company}
                  </p>
                  <p className='opacity-50 text-sm'>{experience.title}</p>
                </div>
                <span className='opacity-90 text-sm'>
                  {experience.durationStart} – {experience.durationEnd}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
