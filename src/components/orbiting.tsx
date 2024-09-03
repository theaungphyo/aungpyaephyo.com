import NestJS from '@/components/icons/nest';
import Next from '@/components/icons/next';
import ReactIcon from '@/components/icons/react';
import TypeScript from '@/components/icons/typescript';
import OrbitingCircles from '@/components/orbiting-circles';

const Orbiting = () => {
  return (
    <div className='relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg'>
      <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
        Skills
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className='h-[30px] w-[30px] border-none bg-transparent'
        duration={20}
        delay={20}
        radius={80}
      >
        <TypeScript className='size-8' />
      </OrbitingCircles>
      <OrbitingCircles
        className='h-[30px] w-[30px] border-none bg-transparent'
        duration={20}
        delay={10}
        radius={80}
      >
        <ReactIcon className='size-8' />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className='h-[50px] w-[50px] border-none bg-transparent'
        reverse
        radius={190}
        duration={20}
      >
        <Next className='size-8' />
      </OrbitingCircles>
      <OrbitingCircles
        className='h-[50px] w-[50px] border-none bg-transparent'
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <NestJS className='size-8' />
      </OrbitingCircles>
      <OrbitingCircles
        className='h-[50px] w-[50px] border-none bg-transparent'
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <NestJS className='size-8' />
      </OrbitingCircles>
      <OrbitingCircles
        className='h-[50px] w-[50px] border-none bg-transparent'
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <NestJS className='size-8' />
      </OrbitingCircles>
    </div>
  );
};

export default Orbiting;
