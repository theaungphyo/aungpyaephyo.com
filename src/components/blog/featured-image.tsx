import Image from 'next/image';

type Props = {
  image: string | undefined;
  lqpiImage: string;
};

const FeaturedImage = (props: Props) => (
  <header className='relative w-full mb-5 h-96 mx-auto'>
    <Image
      alt={'blog image'}
      blurDataURL={props.lqpiImage}
      sizes={'50'}
      className='object-cover rounded-md'
      placeholder='blur'
      priority
      fill
      src={props.image ?? '/og-bg.png'}
    />
  </header>
);

export default FeaturedImage;
