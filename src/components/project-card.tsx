'use client';
import '@/styles/language.css';
import { ProjectType } from '@/types/projec.type';
import { Eye } from 'lucide-react';
import Image from 'next/image';
const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <li className='w-full group rounded cursor-pointer block h-full text-sm outline-none transition-all focus-within:bg-neutral-100 hover:bg-neutral-100 focus:ring-1 focus:ring-neutral-300 dark:focus-within:bg-neutral-900 dark:hover:bg-neutral-900 dark:focus:ring-neutral-500'>
      <div className='w-full px-2 lg:px-4 py-2 flex items-start gap-2 lg:gap-3'>
        <div className='relative size-[56px] lg:w-[104px] lg:h-[77px] rounded overflow-hidden'>
          <div className='relative size-full overflow-hidden'>
            <Image
              fill
              priority
              sizes={'56'}
              src={project.image}
              alt={project.title}
              className='group-hover:drop-shadow rounded object-cover group-hover:scale-110 transition duration-200'
            />
          </div>
        </div>
        <div className='flex-1'>
          <div className='flex items-center gap-x-2'>
            <span className='text-[15px] font-bold text-black dark:text-slate-50'>
              {project.title}
            </span>
            {project.demo && (
              <a
                target='_blank'
                rel='noreferrer'
                href={project.demo}
                className='text-black dark:text-white transition-colors border border-transparent bg-sky-100 group-hover:border-slate-800/10 rounded-full px-1 dark:bg-slate-700 hover:dark:bg-slate-700 group-hover:dark:border-sky-100/10'
              >
                <Eye size={14} />
              </a>
            )}
          </div>
          <p className='text-[13px] pt-1 text-secondary-foreground/60'>
            {project.description}
          </p>
        </div>
      </div>
    </li>
  );
};
export default ProjectCard;
