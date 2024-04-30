'use client';
import { cn } from '@/lib/utils';
import '@/styles/language.css';
import { ProjectType } from '@/types/projec.type';
import { Eye } from 'lucide-react';
import moment from 'moment/moment';
const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className={cn(
        'relative size-full cursor-pointer rounded-md border border-transparent p-2 text-sm outline-none focus-within:bg-neutral-100 hover:border-gray-400 hover:bg-neutral-100 focus:ring-1 focus:ring-neutral-300 dark:focus-within:bg-neutral-900 dark:hover:border-gray-600 dark:hover:bg-neutral-900 dark:focus:ring-neutral-500  px-4 py-3 bg-neutral-100 dark:bg-neutral-900'
      )}
    >
      <div className='space-y-3'>
        <div>
          <span className='w-32 text-[#646464] dark:text-[#b4b4b4]'>
            {project.year}
          </span>
          <span className='text-sm opacity-70 before:px-1 before:content-["•"]'>
            {moment(project.year, 'YYYYMMDD').fromNow()}
          </span>
        </div>
        <p className='max-sm:text-md flex items-center gap-x-3 font-semibold leading-tight dark:text-[#fff]'>
          {project.title}
          {project.demo && (
            <a href={project.demo} target={'_blank'} rel={'noreferrer'}>
              <Eye size={15} />
            </a>
          )}
        </p>
        <p className='text-gray-800/80 dark:text-gray-300/55'>
          {project.description}
        </p>
        <div className='flex items-center gap-1'>
          <div
            className={cn(
              'h-2 w-2 rounded-full',
              `language-project-${project.skill}`
            )}
          ></div>
          <span className='opacity-70 capitalize'>{project.skill}</span>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
