import experiences from '@/db/experience';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Work',
};
const Page = () => {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">my work</h1>
      <p className="opacity-80">I started my carrier at 2022, August.</p>
      <div className="my-5 h-[1px] bg-black/20 dark:bg-gray-200/50" />
      <div className="space-y-6">
        {experiences.map((experience) => (
          <div key={experience.id}>
            <h2 className="mb-1 text-xl font-medium tracking-tighter">{experience.company}</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{experience.title}</p>
            <p className="opacity-90">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
