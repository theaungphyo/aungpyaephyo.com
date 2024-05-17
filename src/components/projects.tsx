import ProjectCard from '@/components/project-card';
import { projects } from '@/db/project';
import groupBy from '@/lib/group-by';
import { cn } from '@/lib/utils';
import { Fragment } from 'react';

const Projects = () => {
  const allProjects = groupBy(projects, (project) => project.year);
  return (
    <div className='pb-5'>
      {Object.entries(allProjects)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, posts]) => (
          <Fragment key={year}>
            <div className={'flex items-end gap-3 mb-5 w-full'}>
              <h2 className={'text-lg font-bold leading-none'}>{year}</h2>
              <hr
                className={
                  'w-full border-none m-0 -mt-0.5 h-px bg-slate-700/30 dark:bg-slate-300/30 flex-1'
                }
              />
            </div>
            <ul className={cn('group/projects space-y-1 mb-5 ')}>
              {posts.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ul>
          </Fragment>
        ))}
    </div>
  );
};

export default Projects;
