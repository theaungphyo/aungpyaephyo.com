'use client';
import { cn } from '@/lib/utils';
import '@/styles/language.css';
import { ProjectType } from '@/types/projec.type';
import { SquareArrowOutUpRight } from 'lucide-react';
import moment from 'moment/moment';
import Image from 'next/image';
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
        'relative size-full cursor-pointer rounded-md border border-transparent p-2 text-sm outline-none focus-within:bg-neutral-100 hover:border-gray-400 hover:bg-neutral-100 focus:ring-1 focus:ring-neutral-300 dark:focus-within:bg-neutral-900 dark:hover:border-gray-600 dark:hover:bg-neutral-900 dark:focus:ring-neutral-500  px-4 py-3 bg-neutral-100 dark:bg-neutral-900'
      )}
    >
      {all && (
        <div className='relative w-full h-[300px] mb-5 rounded overflow-hidden'>
          <Image
            src={`https://afyxxqlmftohiygrtfjm.supabase.co/storage/v1/object/public/projects/images/${project.image}`}
            alt={''}
            sizes={'599'}
            fill
            priority
            className='object-cover object-left-top'
          />
        </div>
      )}
      <div className='space-y-3'>
        <p className='max-sm:text-md w-full justify-between flex items-center gap-x-3 font-semibold leading-tight dark:text-[#fff]'>
          {project.title}
          {project.demo && (
            <a href={project.demo} target={'_blank'} rel={'noreferrer'}>
              <SquareArrowOutUpRight size={15} />
            </a>
          )}
        </p>
        <div>
          <span className='w-32 text-[#646464] dark:text-[#b4b4b4]'>
            {project.year}
          </span>
          <span className='text-sm opacity-70 before:px-1 before:content-["•"]'>
            {moment(project.year, 'YYYYMMDD').fromNow()}
          </span>
        </div>
        <p className='text-gray-800 dark:text-gray-300'>
          {project.description}
        </p>
        <div className='flex items-center justify-between mt-7'>
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
      </div>
    </div>
  );
};
export default ProjectCard;
