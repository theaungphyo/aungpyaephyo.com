'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import '@/styles/language.css';
import { ProjectType } from '@/types/projec.type';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ArrowUpRightIcon, LinkIcon } from 'lucide-react';
const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Card className='flex flex-col border shadow w-full dark:bg-black'>
      <CardHeader className='flex flex-col space-y-2 p-4'>
        <CardTitle className='text-xl dark:text-neutral-100 text-neutral-900'>
          <div className='inline-flex items-center hover:underline group underline-offset-4 gap-2'>
            <h3>{project.title}</h3>
            <ArrowUpRightIcon className='size-4 text-neutral-500 dark:group-hover:text-neutral-100 group-hover:text-neutral-900' />
          </div>
        </CardTitle>
        <CardDescription className='font-mono dark:text-neutral-400 text-neutral-600'>
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className='flex flex-col space-y-6 p-4 pt-0'>
        <div className='flex flex-wrap gap-2'>
          {project.skills.map((tag) => (
            <Badge
              className='p-1 gap-3 rounded-md shadow'
              variant='secondary'
              key={tag.name}
            >
              <div className={'size-3 grid items-center project-icon'}>
                {tag.icon}
              </div>
              <p className='text-xs capitalize'>{tag.name}</p>
            </Badge>
          ))}
        </div>

        <div className='flex gap-x-2'>
          {project.demo && (
            <Button
              variant='default'
              size={null}
              className='p-2 shadow'
              asChild
            >
              <a
                href={project.demo}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-2'
              >
                <LinkIcon className='size-4' />
                <p>Preview</p>
              </a>
            </Button>
          )}
          {project.github && (
            <Button
              variant='default'
              size={null}
              className='p-2 shadow'
              asChild
            >
              <a
                href={project.github}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-2'
              >
                <GitHubLogoIcon className='size-4' />
                <p>GitHub</p>
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
export default ProjectCard;
