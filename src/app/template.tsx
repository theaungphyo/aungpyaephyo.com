import PageTransition from '@/components/page-transition';
import { ReactNode } from 'react';

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <PageTransition className='pb-24 pt-16 md:pb-44 md:pt-8'>
      {children}
    </PageTransition>
  );
};

export default Template;
