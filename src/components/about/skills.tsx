import Section from '@/components/section';
import skills from '@/db/skill-data';
import { cn } from '@/lib/utils';

const Skills = () => {
  return (
    <Section heading={'Skills'} headingAlignment={'left'}>
      <ul className={'flex items-center gap-2.5 flex-wrap'}>
        {skills.map((skill) => {
          return (
            <li className={'block'} key={skill.name}>
              <span
                className={cn(
                  'text-xs font-semibold font-mono bg-[#F9F9F9] dark:bg-[#191919] px-2 py-1 border rounded flex justify-center items-center gap-x-1'
                )}
              >
                <div className='size-4 project-card grid items-center'>
                  {skill.icon}
                </div>
                <p className='capitalize'>{skill.name}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Skills;
