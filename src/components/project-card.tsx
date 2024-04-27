import { ProjectType } from '@/types/projec.type';
import { cn } from '@/lib/utils';
import { Building, ExternalLink } from 'lucide-react';
import SkillCard from '@/components/skill-card';

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <li className="border-neutral-150 grid gap-2.5 rounded-lg border p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600">
      <p className="group flex cursor-pointer items-center gap-x-3 font-semibold">
        {project.title}{' '}
        {project.demo && (
          <a
            href={project.demo}
            target={'_blank'}
            rel="noreferrer"
            className="transition duration-500 group-hover:translate-x-[5px]"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </p>
      <div className="flex w-full items-center gap-x-5">
        {project.made_at && (
          <p className={cn('group flex items-center gap-x-1 text-sm font-medium opacity-80')}>
            <Building size={17} /> {project.made_at}{' '}
          </p>
        )}
      </div>
      <p className="text-sm opacity-80">{project.description}</p>
      <div className="flex items-center gap-2.5 text-sm">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          {project.skills.split(',').map((p) => (
            <SkillCard key={p} skill={p} />
          ))}
        </div>
      </div>
    </li>
  );
};
export default ProjectCard;
