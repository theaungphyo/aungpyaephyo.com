import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Express,
  Framer,
  HookForm,
  JS,
  MDX,
  MUI,
  Mogo,
  NEXTJS,
  NODEJS,
  NextAuth,
  NextUi,
  POSTGRES,
  REACT,
  Redux,
  SUPABase,
  ShadcnUI,
  TS,
  Tail,
  ZOD,
} from '@/images';
import Image from 'next/image';

const SkillCard = ({ skill }: { skill: string }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className='relative rounded overflow-hidden size-5'>
            <Image
              src={IMAGE(skill)}
              alt={skill}
              sizes={'15'}
              className='rounded'
              fill
              priority
            />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{skill}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export const IMAGE = (image: string) => {
  switch (image.toLowerCase()) {
    case 'next.js':
      return NEXTJS;
    case 'react.js':
      return REACT;
    case 'node.js':
      return NODEJS;
    case 'postgresql':
      return POSTGRES;
    case 'javascript':
      return JS;
    case 'typescript':
      return TS;
    case 'tailwindcss':
      return Tail;
    case 'redux':
      return Redux;
    case 'express.js':
      return Express;
    case 'nextui':
      return NextUi;
    case 'materialui':
      return MUI;
    case 'shadcnui':
      return ShadcnUI;
    case 'radixui':
      return ShadcnUI;
    case 'supabase':
      return SUPABase;
    case 'zod':
      return ZOD;
    case 'nextauth':
      return NextAuth;
    case 'framermotion':
      return Framer;
    case 'reacthookform':
      return HookForm;
    case 'reduxtoolkit':
      return Redux;
    case 'mongodb':
      return Mogo;
    case 'mdx-remote':
      return MDX;
    default:
      return TS;
  }
};
export default SkillCard;
