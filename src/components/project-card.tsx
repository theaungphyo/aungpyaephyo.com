'use client';
import SkillCard from '@/components/skill-card';
import { cn } from '@/lib/utils';
import { ProjectType } from '@/types/projec.type';
import { Eye } from 'lucide-react';
import moment from 'moment/moment';
const ProjectCard = ({
  project,
  all,
}: {
  project: ProjectType;
  all: boolean;
}) => {
  return (
    <div
      className={cn(
        'group relative block h-full w-full cursor-pointer rounded-md border border-transparent p-2 text-sm outline-none transition-all focus-within:bg-neutral-100 hover:border-gray-400 hover:bg-neutral-100 focus:ring-1 focus:ring-neutral-300 dark:focus-within:bg-neutral-900 dark:hover:border-gray-800 dark:hover:bg-neutral-900 dark:focus:ring-neutral-500  lg:px-4 lg:py-3 lg:hover:!opacity-100 lg:group-hover/list:opacity-50',
        !all && 'bg-neutral-100 px-4 py-3 dark:bg-neutral-900'
      )}
    >
      <div className='animated-list flex flex-row justify-between gap-2 transition hover:!opacity-100 group-hover:opacity-50'>
        <div className='space-y-3'>
          <div>
            <span className='w-32 text-[#646464] dark:text-[#b4b4b4]'>
              {project.year}
            </span>
            <span className='text-sm opacity-70 before:px-1 before:content-["•"]'>
              {moment(project.year, 'YYYYMMDD').fromNow()}
            </span>
          </div>
          <p className='max-sm:text-md flex items-center gap-x-3 font-semibold leading-tight transition dark:text-[#fff]'>
            {project.title}
            {project.demo && (
              <a href={project.demo} target={'_blank'} rel={'noreferrer'}>
                <Eye size={15} />
              </a>
            )}
          </p>
          <p className='text-gray-800/55 dark:text-gray-100/55'>
            [ {project.description} ]
          </p>
          <div className='flex flex-wrap gap-3'>
            {project.skills.split(',').map((skill) => (
              <SkillCard skill={skill} key={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
