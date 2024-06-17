import GroupTitle from '@/components/group-title';
import ViewLink from '@/components/view-link';
import { getProjects } from '@/db/blog';
import groupBy from '@/lib/group-by';
import { cn, sort } from '@/lib/utils';
import { Fragment } from 'react';

const Projects = () => {
  const projects = getProjects().sort((a, b) =>
    sort(a.metadata.publishedAt, b.metadata.publishedAt)
  );

  const groupProjects = groupBy(projects, (projects) =>
    projects.metadata.publishedAt.substring(0, 4)
  );
  return (
    <div className='pb-5'>
      {Object.entries(groupProjects)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, posts]) => (
          <Fragment key={year}>
            <GroupTitle name={year} />
            <ul className={cn('group/projects space-y-5 mb-5 ')}>
              {posts
                .sort((a, b) => +b.metadata.id - +a.metadata.id)
                .map((project) => (
                  <ViewLink
                    key={project.slug}
                    basePath={'project'}
                    slug={project.slug}
                    title={project.metadata.title}
                    publishedAt={project.metadata.publishedAt}
                  />
                ))}
            </ul>
          </Fragment>
        ))}
    </div>
  );
};

export default Projects;
