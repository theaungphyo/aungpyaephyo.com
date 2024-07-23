import Image from 'next/image';

type Props = {
  image: string;
  lqpiImage: string;
  title: string;
};

const FeaturedImage = (props: Props) => (
  <header className='relative w-full h-[300px] overflow-hidden rounded-lg mb-8 flex justify-center items-center'>
    <div className='font-semibold text-blue-500 text-lg'>{props.title}</div>
    <Image
      alt={props.title}
      blurDataURL={props.lqpiImage}
      sizes={'500'}
      fill
      placeholder='blur'
      priority
      src={props.image}
    />
  </header>
);

export default FeaturedImage;
