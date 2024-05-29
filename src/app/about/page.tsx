import Connect from '@/components/about/connect';
import Environment from '@/components/about/environment';
import Gallery from '@/components/about/gallery';
import Hero from '@/components/about/hero';
import Skills from '@/components/about/skills';
import PageTitle from '@/components/page-title';

const Page = () => {
  return (
    <div>
      <PageTitle title={'About'} description={'A glimpse into me.'} />
      <div className='hidden md:block'>
        <Gallery />
      </div>
      <div className='w-full space-y-24'>
        <Hero />
        <Connect />
        <Skills />
        <Environment />
      </div>
    </div>
  );
};

export default Page;
