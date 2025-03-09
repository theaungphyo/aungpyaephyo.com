import { expConfig } from '@/config/exp.config';
import Image from 'next/image';

const WorkHome = () => {
  return (
    <div className="p-5 container">
      <h1 className="text-base font-semibold mb-5 underline text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">Experiences</h1>
      <div className="space-y-6">
        {expConfig.map((experience) => (
          <div
            key={experience.id}
            className="flex items-start md:items-center gap-3 transition hover:!opacity-100 group-hover:opacity-50"
          >
            <Image
              width={30}
              height={30}
              sizes={'30'}
              className="rounded object-cover shadow-logo object-center"
              src={experience.logo}
              alt={experience.company}
              priority
            />
            <div className="flex grow flex-col">
              <a
                href={experience.companyLink ?? '#'}
                target={experience.companyLink ? '_blank' : '_top'}
                rel="noopener noreferrer"
                className="flex items-start flex-col gap-y-1 md:flex-row"
              >
                <div className="flex flex-col gap-y-1 items-start grow">
                  <p className="font-medium text-[16px]">
                    {experience.company}
                  </p>
                  <p className="opacity-50 text-sm">{experience.title}</p>
                </div>
                <div className="flex flex-col gap-y-1 items-start md:items-end grow">
                  <span className="opacity-90 text-sm">
                    {experience.durationStart} – {experience.durationEnd}
                  </span>
                  <span className="opacity-50 text-sm">{experience.type}</span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHome;
