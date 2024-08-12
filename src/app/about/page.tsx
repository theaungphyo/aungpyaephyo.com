import Connect from '@/components/about/connect';
import Gallery from '@/components/about/gallery';
import Hero from '@/components/about/hero';
import PageTitle from '@/components/page-title';

const Page = () => {
  return (
    <section>
      <PageTitle title={'About'} description={'A glimpse into me.'} />
      <div className='hidden md:block'>
        <Gallery />
      </div>
      <div className='w-full space-y-12'>
        <Hero />
        <Connect />
      </div>
    </section>
  );
};

export default Page;
