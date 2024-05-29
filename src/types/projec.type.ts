import type { ReactNode } from 'react';

type skill = {
  name: string;
  icon: ReactNode;
};
export type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  demo?: string;
  skills: skill[];
  year: number;
  made_at?: string;
  github?: string;
};
