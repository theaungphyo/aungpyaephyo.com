import PageTransition from '@/components/page-transition';
import { ReactNode } from 'react';

const Template = ({ children }: { children: ReactNode }) => {
  return <PageTransition>{children}</PageTransition>;
};

export default Template;
