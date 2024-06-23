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
            className='flex items-center gap-3 transition hover:!opacity-100 group-hover:opacity-50'
          >
            <Image
              width={45}
              height={45}
              className='rounded object-cover bg-[#FAFCFA]'
              src={experience.logo}
              alt={experience.company}
            />
            <div className='flex w-full flex-col'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-[16px]'>{experience.title}</p>
                </div>
                <span className='text-sm'>
                  {experience.durationStart} - {experience.durationEnd}
                </span>
              </div>
              <p className='text-xs text-[#646464] dark:text-[#b4b4b4]'>
                {experience.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
