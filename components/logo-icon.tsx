import Image from 'next/image';
import Link from 'next/link';

const LogoIcon = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image
        src={'/logo.png'}
        alt={'Image'}
        className="rounded-full select-none"
        width={35}
        height={35}
      />
    </Link>
  );
};

export default LogoIcon;
