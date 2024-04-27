import { ProjectType } from '@/types/projec.type';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <li className="border-neutral-150 grid gap-2.5 rounded-lg border p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600">
      <p className="font-semibold">{project.title}</p>
      <p className={cn('text-sm opacity-70')}>{project.description}</p>
      <div className="flex items-center gap-2.5 text-sm">
        <div className="flex flex-wrap items-center gap-5">
          {project.skills.split(',').map((p) => (
            <span key={p} className="flex items-center gap-x-2 opacity-70">
              {' '}
              <span className="block size-2 rounded-full bg-black dark:bg-white"></span> {p}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};
export default ProjectCard;
