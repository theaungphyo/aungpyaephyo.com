import Projects from '@/components/projects';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Project',
};
const Page = () => {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">my projects</h1>
      <Projects all />
    </div>
  );
};

export default Page;
