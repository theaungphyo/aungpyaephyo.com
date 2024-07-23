import Image from 'next/image';

type Props = {
  image: string;
  lqpiImage: string;
  title: string;
};

const FeaturedImage = (props: Props) => (
  <header className='relative w-full mb-5'>
    <div className='absolute inset-0 flex p-6 justify-center items-center font-extrabold text-blue-500 text-lg lg:text-2xl z-10 text-center font-mono'>
      {props.title}
    </div>
    <Image
      alt={props.title}
      blurDataURL={props.lqpiImage}
      sizes={'200'}
      height={400}
      width={780}
      className='object-cover object-bottom rounded-lg'
      placeholder='blur'
      priority
      src={props.image}
    />
  </header>
);

export default FeaturedImage;
