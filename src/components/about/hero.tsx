import Section from '@/components/section';
import Link from 'next/link';
import { appConfig } from '../../../app.config';
const Hero = () => {
  return (
    <>
      {/*<div className='relative flex md:hidden'>*/}
      {/*  <div className='animate-in '>*/}
      {/*    <Image*/}
      {/*      blurDataURL={blurDataImage}*/}
      {/*      src={'/memories/1.jpg'}*/}
      {/*      alt={'me and lily'}*/}
      {/*      width={324}*/}
      {/*      height={139}*/}
      {/*      className='pointer-events-none h-60 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md'*/}
      {/*      priority*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className='animate-in mt-5'>*/}
      {/*    <Image*/}
      {/*      blurDataURL={blurDataImage}*/}
      {/*      src={'/memories/4.jpg'}*/}
      {/*      alt={'me and lily'}*/}
      {/*      width={220}*/}
      {/*      height={240}*/}
      {/*      className='pointer-events-none  rotate-6 rounded-xl bg-gray-400 object-cover shadow-md w-56'*/}
      {/*      priority*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <Section heading='About' headingAlignment='left'>
        <div className='flex flex-col gap-6'>
          <p>
            Hi, I&apos;m {appConfig.name}, born in Kyaukse. I have been coding
            for {new Date().getFullYear() - 2022} years. As a web developer, I
            specialize in full-stack web development.
          </p>
          <p>
            In addition to coding, I create content on my{' '}
            <Link className='underline' href={'/blog'}>
              blog
            </Link>{' '}
            , covering all things technology, coding vlogs, and personal
            development.
          </p>
          <p>
            When I&apos;m not at my desk, I am probably lifting weights, playing
            Multiplayer online battle arena (MOBA) game, riding my e-bike, or at
            a local coffee shop :]
          </p>
        </div>
      </Section>
    </>
  );
};

export default Hero;
