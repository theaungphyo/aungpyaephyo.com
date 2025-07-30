import { ExperienceItemType } from '@/components/work-experience';

export const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: '6',
    companyName: 'MySOL',
    companyLogo: '/company/mysol.png',
    isCurrentEmployer: true,
    positions: [
      {
        id: '6-1',
        title: 'Developer',
        employmentPeriod: 'May 2025 - Present',
        employmentType: 'Onsite - Full-time',
        description: `
- Working as a **Fullstack Developer** at MySOL on various **Japan-based projects**.
- Built and maintained enterprise-level web applications using **PHP (Laravel)** for backend and **React/Next.js with TypeScript** for frontend.
- Collaborated with cross-functional teams including Japanese clients, project managers, and QA engineers.
- Integrated RESTful APIs and handled frontend-backend data flow efficiently.
- Focused on code quality, performance, and responsiveness across devices.
- Participated in sprint planning, daily stand-ups, and code reviews as part of an Agile team.
- Delivered high-quality solutions under tight deadlines with attention to detail and client expectations.
`,
        icon: 'code',
        skills: ['typescript', 'react', 'php', 'laravel', 'mysql'],
        isExpanded: true,
      },
    ],
  },
  {
    id: '5',
    companyName: 'BinaryHubz',
    companyLogo: '/company/binaryhubz.png',
    isCurrentEmployer: true,
    positions: [
      {
        id: '5-1',
        title: 'Lead Developer',
        employmentPeriod: 'Nov 2024 - Present',
        employmentType: 'Remote - Part-time',
        description: `
- Working as a **Lead Developer** at BinaryHubz.
- Leading a small team to deliver **custom software solutions** for clients.
- Designed and developed **Web Applications**, **Point of Sale (POS) systems**, and **Mobile Applications** based on client requirements.
- Involved in **architecture planning**, code reviews, and task delegation.
- Collaborated directly with clients to gather requirements and propose scalable solutions.
- Used modern technologies such as **React**, **Next.js**, **NestJS**, **React Native**, and **PostgreSQL**.
- Ensured code quality and maintainability across multiple projects.
`,
        icon: 'code',
        skills: [
          'tailwindcss',
          'javascript',
          'typescript',
          'react',
          'react-native',
          'redux',
          'zustand',
          'nextjs',
          'react-query',
          'react-table',
          'nodejs',
          'nestjs',
          'go',
          'php',
          'laravel',
          'prisma',
          'typeorm',
          'postgresql',
          'turborepo',
        ],
      },
    ],
  },
  {
    id: '4',
    companyName: 'SiThuLab',
    companyLogo: '/company/sithu.jpg',
    isCurrentEmployer: false,
    positions: [
      {
        id: '4-1',
        title: 'Web Developer',
        employmentPeriod: 'May 2024 - March 2025',
        employmentType: 'Onsite - Full-time',
        description: `
- Worked as a **Fullstack Developer** at SiThuLab.
- Developed and maintained **Point of Sale (POS) systems** for various businesses.
- Integrated frontend and backend modules using **React**, **Next.js**, **NestJS**, and **TypeORM**.
- Designed and optimized relational database schemas for inventory, sales, and customer management.
- Implemented features such as real-time stock updates, invoicing, and report generation.
- Collaborated with stakeholders to gather requirements and deliver tailored solutions.
- Deployed applications and provided technical support to users.
      `,
        icon: 'code',
        skills: [
          'tailwindcss',
          'javascript',
          'typescript',
          'react',
          'redux',
          'zustand',
          'nextjs',
          'react-query',
          'react-table',
          'nodejs',
          'nestjs',
          'prisma',
          'typeorm',
          'postgresql',
          'turborepo',
        ],
      },
    ],
  },
  {
    id: '2',
    companyName: 'Myanmar Media Linkage',
    companyLogo: '/company/mml.jpg',
    isCurrentEmployer: false,
    positions: [
      {
        id: '2-1',
        title: 'Frontend Developer',
        employmentPeriod: 'Nov 2023 - March 2024',
        employmentType: 'Onsite - Full-time',
        description: `
- Worked as a **Frontend Developer** at Myanmar Media Linkage.
- Developed and maintained frontend features using **Next.js**.
- Collaborated with backend developers and UI/UX designers to deliver responsive web applications.
- Integrated RESTful APIs and handled dynamic data rendering.
- Implemented reusable components and optimized performance.
- Participated in team meetings and contributed to sprint planning and reviews.
      `,
        icon: 'code',
        skills: [
          'tailwindcss',
          'javascript',
          'typescript',
          'react',
          'redux',
          'zustand',
          'nextjs',
          'react-query',
          'react-table',
        ],
      },
    ],
  },
];
