import ProjectCard from '@/components/project-card';
import { projects } from '@/db/project';
import { cn } from '@/lib/utils';

const Projects = () => {
  const allProjects = projects.sort((a, b) => b.id - a.id);

  return (
    <div className='pb-5'>
      <ul className={cn('group/list/node space-y-7 ')}>
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
