import Section from '@/components/section';
import devEnv from '@/db/dev-env';
import { cn } from '@/lib/utils';

const Environment = () => {
  return (
    <Section heading={'Tools'} headingAlignment={'left'}>
      <ul className={'flex items-center gap-2.5 flex-wrap'}>
        {devEnv.map((env) => {
          return (
            <li className={'block'} key={env.name}>
              <span
                className={cn(
                  'text-xs font-semibold font-mono bg-[#F9F9F9] dark:bg-[#191919] px-2 py-1 border rounded flex justify-center items-center gap-x-1'
                )}
              >
                <div className='size-4 grid items-center project-card'>
                  {env.icon}
                </div>
                <p className='capitalize'>{env.name}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Environment;
