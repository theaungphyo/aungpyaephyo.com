import { ProjectType } from '@/types/projec.type';
import SkillCard from '@/components/skill-card';

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <li className="border-neutral-150 size-full rounded-lg border p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600">
      <p className="mb-2 cursor-pointer font-semibold">{project.title} </p>
      <p className="mb-3 text-sm opacity-80">
        {project.description}
        {'. '}
        {project.demo && (
          <a className="underline" href={project.demo} target={'_blank'} rel={'noreferrer'}>
            demo
          </a>
        )}
      </p>
      <div className="flex items-center gap-2.5 text-sm">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {project.skills.split(',').map((p) => (
            <SkillCard key={p} skill={p} />
          ))}
        </div>
      </div>
    </li>
  );
};
export default ProjectCard;
