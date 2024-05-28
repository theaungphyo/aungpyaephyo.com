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
import { ArrowUpRightIcon, Github, LinkIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { shortNames } from '../../app.config';
const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
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
              className='p-1 gap-1 rounded-md shadow'
              variant='secondary'
              key={tag}
            >
              <img
                src={`https://skillicons.dev/icons?i=${tag}&theme=${theme}`}
                alt={'icon'}
                className='inline-block size-4 object-contain'
              />
              <p className='text-xs capitalize'>{shortNames[tag] || tag}</p>
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
                <Github className='size-4' />
                <p>GitHub</p>
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
    // <li className='w-full group rounded cursor-pointer block h-full text-sm outline-none transition-all focus-within:bg-neutral-100 hover:bg-neutral-100 focus:ring-1 focus:ring-neutral-300 dark:focus-within:bg-neutral-900 dark:hover:bg-neutral-900 dark:focus:ring-neutral-500'>
    //   <div className='w-full px-2 lg:px-4 py-2 flex items-start gap-2 lg:gap-3'>
    //     <div className='relative size-[56px] lg:w-[104px] lg:h-[77px] rounded overflow-hidden'>
    //       <div className='relative size-full overflow-hidden'>
    //         <Image
    //           fill
    //           priority
    //           sizes={'56'}
    //           src={project.image}
    //           alt={project.title}
    //           className='group-hover:drop-shadow rounded object-cover group-hover:scale-110 transition duration-200'
    //         />
    //       </div>
    //     </div>
    //     <div className='flex-1'>
    //       <div className='flex items-center gap-x-2'>
    //         <span className='text-[15px] font-bold text-black dark:text-slate-50'>
    //           {project.title}
    //         </span>
    //         {project.demo && (
    //           <a
    //             target='_blank'
    //             rel='noreferrer'
    //             href={project.demo}
    //             className='text-black dark:text-white transition-colors border border-transparent bg-sky-100 group-hover:border-slate-800/10 rounded-full px-1 dark:bg-slate-700 hover:dark:bg-slate-700 group-hover:dark:border-sky-100/10'
    //           >
    //             <Eye size={14} />
    //           </a>
    //         )}
    //       </div>
    //       <p className='text-[13px] pt-1 text-secondary-foreground/60'>
    //         {project.description}
    //       </p>
    //     </div>
    //   </div>
    // </li>
  );
};
export default ProjectCard;
