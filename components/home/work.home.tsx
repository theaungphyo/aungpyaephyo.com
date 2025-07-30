import { WorkExperience } from '@/components/work-experience';
import { WORK_EXPERIENCE } from '@/config/exp.config';

const WorkHome = () => {
  return (
    <div className="p-5 container pb-0">
      <h1 className="text-base font-semibold mb-5 underline text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
        Experiences
      </h1>
      <WorkExperience experiences={WORK_EXPERIENCE} className="px-0" />
    </div>
  );
};

export default WorkHome;
