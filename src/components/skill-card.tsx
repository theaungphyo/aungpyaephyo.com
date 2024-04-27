import Image from 'next/image';
import {
  Express,
  Framer,
  HookForm,
  JS,
  Mogo,
  MUI,
  NextAuth,
  NEXTJS,
  NextUi,
  NODEJS,
  POSTGRES,
  REACT,
  Redux,
  ShadcnUI,
  SUPABase,
  Tail,
  TS,
  ZOD,
} from '@/images';

const SkillCard = ({ skill }: { skill: string }) => {
  return (
    <span className="flex items-center gap-x-2 text-xs opacity-70">
      <Image
        src={IMAGE(skill)}
        alt={skill}
        width={15}
        height={15}
        className="rounded object-contain"
      />{' '}
      {skill}
    </span>
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
    default:
      return TS;
  }
};
export default SkillCard;
