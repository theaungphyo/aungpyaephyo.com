import SectionTitle from '@/components/section-title';
import experiences from '@/db/experience';
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
              width={45}
              height={45}
              className='rounded object-contain bg-[#FAFCFA] shadow-md'
              src={experience.logo}
              alt={experience.company}
            />
            <div className='flex grow flex-col'>
              <a
                href={experience.companyLink ?? '#'}
                target={experience.companyLink ? '_blank' : '_top'}
                rel='noopener noreferrer'
                className='flex items-start flex-col gap-y-2 md:flex-row'
              >
                <div className='grow'>
                  <p className='font-medium text-[16px]'>{experience.title}</p>
                  <p className='opacity-50 text-sm'>{experience.company}</p>
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
