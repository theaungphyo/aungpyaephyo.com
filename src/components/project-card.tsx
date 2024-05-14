'use client';
import { cn } from '@/lib/utils';
import '@/styles/language.css';
import { ProjectType } from '@/types/projec.type';
import Image from 'next/image';
const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <li
      key={project.id}
      className={cn(
        'w-full flex flex-col gap-4 py-6 transition-opacity first:pt-0 last:pb-0 md:flex-row md:gap-6'
      )}
    >
      {project.demo ? (
        <a
          href={`${project.demo}`}
          target='_blank'
          rel='noopener noreferrer'
          className='flex select-none overflow-clip rounded-lg border border-secondary bg-tertiary'
        >
          <div className='w-full md:w-[150px] h-[100px] relative'>
            <Image
              src={`https://afyxxqlmftohiygrtfjm.supabase.co/storage/v1/object/public/projects/images/${project.image}`}
              alt={project.title}
              fill
              priority
              sizes='599'
              className='object-cover'
            />
          </div>
        </a>
      ) : (
        <div className='flex select-none overflow-clip rounded-lg border border-secondary bg-tertiary'>
          <div className='w-full md:w-[150px] h-[100px] relative'>
            <Image
              src={`https://afyxxqlmftohiygrtfjm.supabase.co/storage/v1/object/public/projects/images/${project.image}`}
              alt={project.title}
              fill
              priority
              sizes='599'
              className='object-cover'
            />
          </div>
        </div>
      )}
      <div className='space-y-2 flex-1'>
        <div className='flex gap-x-2'>
          <div className='font-medium text-primary hover:underline'>
            {project.title}
          </div>
          <time className='text-secondary'> · {project.year}</time>
        </div>

        <p className='line-clamp-3 text-tertiary'>{project.description}</p>
        <div className='flex items-center'>
          {project.skills.map((icon, index) => (
            <div
              key={index}
              className='border border-white/[.2] rounded-full bg-neutral-300 dark:bg-black w-8 h-8 flex justify-center items-center relative overflow-hidden'
              style={{
                transform: `translateX(-${5 * index + 2}px)`,
              }}
            >
              <img
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt='icon5'
                className='p-2 object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};
export default ProjectCard;
