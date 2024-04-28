import { projects } from '@/db/project';
import SectionTitle from '@/components/section-title';
import ProjectCard from '@/components/project-card';
import { cn } from '@/lib/utils';

const Projects = ({ all = false }: { all?: boolean }) => {
  const allProjects = all
    ? projects.sort((a, b) => b.id - a.id)
    : projects.sort((a, b) => b.id - a.id).filter((p, index) => index < 4);
  return (
    <div>
      {!all && <SectionTitle title={'Projects'} href={'/project'} viewAll />}
      <ul
        className={cn(
          'group/list ',
          cn(!all ? 'grid grid-cols-1 gap-5 lg:grid-cols-2' : 'space-y-6'),
        )}
      >
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
