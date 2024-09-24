import Github from '@/components/icons/github';
import { ReadMore } from '@/components/project/read-more';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ProjectType } from '@/types/projec.type';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Project = ({ project }: { project: ProjectType }) => {
  const { skills, github, image, title, demo, made_at, testimonial } = project;
  return (
    <Card className='group rounded-none border-none bg-accent/60 from-neutral-800/10 p-4 dark:bg-neutral-900 dark:hover:bg-gradient-to-bl sm:rounded-lg'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-start justify-between'>
          <div className='flex items-start gap-2'>
            {image && (
              <Image
                src={image}
                width={70}
                height={70}
                alt='fds'
                quality={99}
                className='h-14 shrink-0 transition-all rounded object-cover object-center'
              />
            )}
            <div>
              <h3>{title}</h3>
              <p className='text-sm text-muted-foreground'>{made_at}</p>
            </div>
          </div>
          {demo && (
            <div className='flex'>
              {github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      size={'icon'}
                      variant={'ghost'}
                      className='shrink-0'
                    >
                      <Link href={github} target='_blank' aria-label='Github'>
                        <Github className='size-4' />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    side='bottom'
                    className='bg-transparent text-xs'
                  >
                    Source Code
                  </TooltipContent>
                </Tooltip>
              )}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    size={'icon'}
                    variant={'ghost'}
                    className='shrink-0'
                  >
                    <Link
                      href={demo}
                      target='_blank'
                      aria-label='Visit Website'
                    >
                      <ExternalLink className='size-4' />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side='bottom'
                  className='bg-transparent text-xs'
                >
                  Visit Website
                </TooltipContent>
              </Tooltip>
            </div>
          )}
        </div>

        <div>
          {skills && (
            <ul className='mt-2 flex flex-wrap gap-1'>
              {skills.map((tag, idx) => {
                return (
                  <li key={idx}>
                    <Badge variant={'outline'}>
                      <div
                        className={
                          'size-3 grid items-center project-icon mr-1.5 transition-all'
                        }
                      >
                        {tag.icon}
                      </div>
                      {tag.name}
                    </Badge>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        {testimonial && (
          <blockquote className='border-l-2 pl-6 text-sm italic text-card-foreground'>
            <ReadMore text={testimonial} id='d' />
          </blockquote>
        )}
      </div>
    </Card>
  );
};

export default Project;
