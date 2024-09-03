import Express from '@/components/icons/express';
import Javascript from '@/components/icons/javascript';
import Laravel from '@/components/icons/laravel';
import MongoDB from '@/components/icons/mongo';
import Mui from '@/components/icons/mui';
import Mysql from '@/components/icons/mysql';
import Neon from '@/components/icons/neon';
import Next from '@/components/icons/next';
import NextAuth from '@/components/icons/next-auth';
import Node from '@/components/icons/node';
import Php from '@/components/icons/php';
import Postgres from '@/components/icons/postgres';
import RadixUI from '@/components/icons/radix-ui';
import ReactIcon from '@/components/icons/react';
import Redux from '@/components/icons/redux';
import Supabase from '@/components/icons/supabase';
import Tailwind from '@/components/icons/tailwind';
import Typescript from '@/components/icons/typescript';
import Vercel from '@/components/icons/vercel';
import Vite from '@/components/icons/vite';
import Zod from '@/components/icons/zod';

const projects = [
  {
    id: 1,
    title: 'Edu Pad',
    description:
      'Our ReactJS-powered Udemy-like platform offers dynamic interfaces and seamless user experiences, revolutionizing online learning with scalability and innovation.',
    demo: '',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    skills: [
      {
        name: 'tailwind',
        icon: <Tailwind />,
      },
      {
        name: 'vite',
        icon: <Vite />,
      },
      {
        name: 'javascript',
        icon: <Javascript />,
      },
      {
        name: 'react',
        icon: <ReactIcon />,
      },
      {
        name: 'redux',
        icon: <Redux />,
      },
      {
        name: 'php',
        icon: <Php />,
      },
      {
        name: 'laravel',
        icon: <Laravel />,
      },
      {
        name: 'mysql',
        icon: <Mysql />,
      },
    ],
    made_at: 'Freelance',
    year: 2023,
  },
  {
    id: 2,
    title: 'SUPA Blog',
    description:
      'This is created with tailwindcss, materialui, hyperui, reactjs and supabase. Supabase is firebase alternative. Supabase use relational database like postgresql.',
    demo: 'https://supablogr.vercel.app',
    image: 'https://plus.unsplash.com/premium_photo-1665329006985-04f95dd59402',
    skills: [
      {
        name: 'tailwind',
        icon: <Tailwind />,
      },
      {
        name: 'vite',
        icon: <Vite />,
      },
      {
        name: 'javascript',
        icon: <Javascript />,
      },
      {
        name: 'react',
        icon: <ReactIcon />,
      },
      {
        name: 'redux',
        icon: <Redux />,
      },
      {
        name: 'supabase',
        icon: <Supabase />,
      },
      {
        name: 'Vercel',
        icon: <Vercel />,
      },
    ],
    made_at: '',
    year: 2023,
    github: 'https://github.com/aungpyaephyo1412/supa_blog',
  },
  {
    id: 3,
    title: 'JK Mobile',
    description:
      'JK Mobile exemplifies my ability to leverage a diverse stack of technologies to create a refined and feature-rich mobile application. This project serves as a showcase of my expertise in front-end development, state management, and backend integration, making it a valuable addition to any resume',
    demo: 'https://jkmobile.vercel.app',
    image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672',
    skills: [
      {
        name: 'tailwind',
        icon: <Tailwind />,
      },
      {
        name: 'materialUI',
        icon: <Mui />,
      },
      {
        name: 'vite',
        icon: <Vite />,
      },
      {
        name: 'javascript',
        icon: <Javascript />,
      },
      {
        name: 'react',
        icon: <ReactIcon />,
      },
      {
        name: 'redux',
        icon: <Redux />,
      },
      {
        name: 'supabase',
        icon: <Supabase />,
      },
      {
        name: 'Vercel',
        icon: <Vercel />,
      },
    ],
    made_at: '',
    year: 2023,
    github: 'https://github.com/aungpyaephyo1412/jk_mobile',
  },
  {
    id: 4,
    title: 'Kawi Admin Dashboard',
    description:
      'Developed the Kawi Admin Dashboard at Myanmar Media Linkage Company Limited in 2023. The project, built with Tailwind CSS, ShadcnUI, Next.js, Zod, and NextAuth, significantly improved internal management processes.',
    demo: '',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74',
    skills: [
      {
        name: 'tailwind',
        icon: <Tailwind />,
      },
      {
        name: 'Radix/UI',
        icon: <RadixUI />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'next-auth',
        icon: <NextAuth />,
      },
      {
        name: 'zod',
        icon: <Zod />,
      },
    ],
    made_at: 'Myanmar Media Linkage',
    year: 2023,
  },
  {
    id: 5,
    title: 'Javascript Quiz App',
    description:
      'This is created with shadcn-ui, mdx-remote, nextjs and nodejs.  This page is for javascript developer to practise easy the javascript. This questions got from Mrs.Lydia Hallie github.',
    demo: 'https://jsquestionsr.vercel.app',
    image: 'https://plus.unsplash.com/premium_photo-1661414473396-4600573d1f33',
    skills: [
      {
        name: 'tailwind',
        icon: <Tailwind />,
      },
      {
        name: 'typescript',
        icon: <Typescript />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'nodejs',
        icon: <Node />,
      },
      {
        name: 'vercel',
        icon: <Vercel />,
      },
    ],
    made_at: '',
    year: 2024,
    github: 'https://github.com/aungpyaephyo1412/javascript-questions',
  },
  {
    id: 6,
    title: 'MM Pad',
    description:
      'Developed the MMPad at Myanmar Media Linkage Company Limited in 2023. The project, built with Tailwindcss, RadixUI, NextJS, Zod, React-Hook-Form, Zustand, NextAuth, Inspired by Wattpad',
    demo: '',
    image: 'https://images.unsplash.com/photo-1569098644584-210bcd375b59',
    skills: [
      {
        name: 'tailwind',
        icon: <Tailwind />,
      },
      {
        name: 'Radix/UI',
        icon: <RadixUI />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'next-auth',
        icon: <NextAuth />,
      },
      {
        name: 'zod',
        icon: <Zod />,
      },
    ],
    made_at: 'Myanmar Media Linkage',
    year: 2023,
  },
  {
    id: 7,
    title: "Thihan's Portfolio",
    description:
      "Developed a UI/UX project for Ko Thihan. The project aimed to briefly describe the project's goals and objectives, such as enhancing user experience or increasing engagement.",
    demo: 'https://thihan.vercel.app',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
    skills: [
      {
        name: 'tailwind',
        icon: <Tailwind />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'next-auth',
        icon: <NextAuth />,
      },
      {
        name: 'zod',
        icon: <Zod />,
      },
      {
        name: 'supabase',
        icon: <Supabase />,
      },
      {
        name: 'vercel',
        icon: <Vercel />,
      },
    ],
    made_at: 'Freelance',
    year: 2023,
  },
  {
    id: 8,
    title: 'IT Job MM',
    description:
      'I led the development of a smart IT job finder platform using Next.js, Node.js, Express.js, MongoDB, TypeScript, and NextUI. I focused on making it user-friendly and fast, ensuring it connects job seekers with the right IT jobs.',
    demo: 'https://itjobmm.vercel.app',
    image: 'https://plus.unsplash.com/premium_photo-1661274189734-90d6aa7eb010',
    skills: [
      {
        name: 'tailwind',
        icon: <Tailwind />,
      },
      {
        name: 'Typescript',
        icon: <Typescript />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'nodejs',
        icon: <Node />,
      },
      {
        name: 'expressjs',
        icon: <Express />,
      },
      {
        name: 'mongodb',
        icon: <MongoDB />,
      },
      {
        name: 'vercel',
        icon: <Vercel />,
      },
    ],
    made_at: '',
    year: 2024,
  },
  {
    id: 10,
    title: 'Walmal POS',
    demo: 'https://walmal.vercel.app',
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9',
    skills: [
      {
        name: 'tailwind',
        icon: <Tailwind />,
      },
      {
        name: 'Radix/UI',
        icon: <RadixUI />,
      },
      {
        name: 'Typescript',
        icon: <Typescript />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'redux',
        icon: <Redux />,
      },
      {
        name: 'nodejs',
        icon: <Node />,
      },
      {
        name: 'expressjs',
        icon: <Express />,
      },
      {
        name: 'postgresql',
        icon: <Postgres />,
      },
      {
        name: 'neon',
        icon: <Neon />,
      },
      {
        name: 'vercel',
        icon: <Vercel />,
      },
    ],
    made_at: 'Walmal Shopping',
    year: 2024,
    description:
      'Walmart.com.mm is a robust e-commerce platform built with TypeScript, Next.js, Redux, Node.js, Express.js, PostgreSQL, and hosted on Vercel, ensuring a fast, scalable, and seamless online shopping experience.',
  },
  {
    id: 11,
    title: 'Loopfeed Media Platform',
    demo: 'https://loopfeed.vercel.app',
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9',
    skills: [
      {
        name: 'tailwind',
        icon: <Tailwind />,
      },
      {
        name: 'Radix/UI',
        icon: <RadixUI />,
      },
      {
        name: 'Typescript',
        icon: <Typescript />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'next-auth',
        icon: <NextAuth />,
      },
      {
        name: 'nodejs',
        icon: <Node />,
      },
      {
        name: 'expressjs',
        icon: <Express />,
      },
      {
        name: 'postgresql',
        icon: <Postgres />,
      },
      {
        name: 'neon',
        icon: <Neon />,
      },
      {
        name: 'supabase',
        icon: <Supabase />,
      },
      {
        name: 'vercel',
        icon: <Vercel />,
      },
    ],
    made_at: 'Loopfeed',
    year: 2024,
    description:
      'Loopfeed is a social media platform built with TypeScript, Next.js, Redux, Node.js, Express.js, PostgreSQL, and hosted on Vercel and storage for supabase, ensuring a fast, scalable, and seamless online media experience.',
  },
];
export default projects;
