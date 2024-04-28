'use client';
import { ProjectType } from '@/types/projec.type';
import Image from 'next/image';
import SkillCard from '@/components/skill-card';
import moment from 'moment/moment';
import { Eye } from 'lucide-react';
const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="relative transition-opacity">
      <div className="animated-list flex flex-row flex-wrap justify-between gap-2 transition hover:!opacity-100 group-hover:opacity-50">
        <div className="flex flex-1 flex-col gap-3">
          <div>
            <span className="w-32 text-[#646464] dark:text-[#b4b4b4]">{project.year}</span>
            <span className='text-sm opacity-70 before:px-1 before:content-["•"]'>
              {moment(project.year, 'YYYYMMDD').fromNow()}
            </span>
          </div>
          <p className="max-sm:text-md flex items-center gap-x-3 font-semibold leading-tight transition dark:text-[#fff]">
            {project.title}
            {project.demo && (
              <a href={project.demo} target={'_blank'} rel={'noreferrer'}>
                <Eye size={15} />
              </a>
            )}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.skills.split(',').map((skill) => (
              <SkillCard skill={skill} key={skill} />
            ))}
          </div>
        </div>
        <div className="relative mt-4 h-[150px] w-full overflow-hidden rounded md:mt-0 md:h-auto md:!w-[100px]">
          <Image
            priority
            src={`https://afyxxqlmftohiygrtfjm.supabase.co/storage/v1/object/public/projects/images/${project.image}`}
            sizes={'500'}
            alt={project.title}
            fill
            className=" !object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
