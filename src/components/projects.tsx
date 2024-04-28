import { projects } from '@/db/project';
import SectionTitle from '@/components/section-title';
import ProjectCard from '@/components/project-card';
import { cn } from '@/lib/utils';

const Projects = ({ all = false }: { all?: boolean }) => {
  const allProjects = all
    ? projects.sort((a, b) => b.year - a.year)
    : projects.sort((a, b) => b.year - a.year).filter((p, index) => index < 4);
  return (
    <div>
      {!all && <SectionTitle title={'Projects'} href={'/project'} viewAll />}
      <ul className={cn('group/list ', cn('space-y-7'))}>
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
