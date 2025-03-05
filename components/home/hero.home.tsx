'use client';

import { siteConfig } from '@/config/site.config';
import Image from 'next/image';
import Link from 'next/link';
const HeroHome = () => {
  return (
    <div className="w-full container flex items-start gap-8 p-5">
      <p className="flex-1">
        {"I'm a software engineer. I"}{' '}
        <a
          target={'_blank'}
          rel={'noreferrer'}
          aria-label={'link'}
          className="underline"
          href={siteConfig.socials.github.url}
        >
          code
        </a>
        ,{' '}
        <Link className="underline" href={'/git'}>
          write
        </Link>{' '}
        and build stuff on internet. I love working in-between product,
        engineering and developer experience, currently at{' '}
        <a
          href="https://www.binaryhubz.com"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          BinaryHubz
        </a>
        .
        <br />
        <br />
        I&apos;m {siteConfig.name}, born in Kyaukse. I have been coding for{' '}
        {new Date().getFullYear() - 2022} years. As a web developer, I
        specialize in full-stack web development. In addition to coding, I
        create content on my{' '}
        <Link className="underline" href={'/blog'}>
          blog
        </Link>{' '}
        , covering all things technology, coding vlogs, and personal
        development.
      </p>
      <div className="relative size-44  sm:block">
        <Image
          alt={siteConfig.name}
          src={'/avatar.jpg'}
          className=" transform-gpu rounded object-cover  bg-neutral-300 dark:bg-neutral-800 scale-x-[-1]"
          fill
        />
      </div>
    </div>
  );
};

export default HeroHome;
