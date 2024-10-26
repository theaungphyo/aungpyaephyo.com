'use client';

import { blurDataImage, cn } from '@/lib/utils';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

type PhotoProps = {
  src: StaticImageData | string;
  meta?: ReactNode;
  filename?: string;
  alt: string;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  flipDirection?: 'left' | 'right';
  children?: ReactNode;
};

function Photo({
  src,
  alt,
  width,
  height,
  rotate,
  left,
  index,
  flipDirection,
  meta,
  children,
}: PhotoProps) {
  const shared = 'absolute h-full w-full rounded-xl overflow-hidden';
  return (
    <motion.div
      className={
        'absolute mx-auto cursor-grab hover:before:block hover:before:w-[calc(100%+55px)] hover:before:h-[300px] hover:before:absolute hover:before:-top-8 hover:before:-left-7'
      }
      style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0,
      }}
      transition={{
        default: {
          type: 'spring',
          bounce: 0.2,
          duration:
            index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
          delay: index * 0.15,
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15,
        },
        scale: { duration: 0.12 },
      }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      drag
      whileTap={{ scale: 1.1, cursor: 'grabbing' }}
      whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
      whileHover='flipped'
    >
      <motion.div
        className='relative w-full h-full shadow-md rounded-xl will-change-transform'
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === 'right' ? -180 : 180,
            rotateX: 5,
          },
        }}
      >
        <div className={shared} style={{ backfaceVisibility: 'hidden' }}>
          <Image
            blurDataURL={blurDataImage}
            src={src}
            alt={alt}
            width={width}
            height={height}
            className='absolute inset-0 object-cover w-full h-full bg-neutral-400 pointer-events-none rounded-xl'
            priority
          />
          {children}
        </div>
        <div
          className={cn(
            shared,
            'bg-[#FFFAF2] flex items-center rounded-xl overflow-hidden'
          )}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className='flex items-center'>
            <span className="absolute w-[500px] h-[500px] rotate-[-20deg] bg-repeat bg-[length:280px] bg-[url('/photopaper.png')]" />
            <div className='z-[1] px-6'>
              <div className={clsx('flex flex-col gap-1 uppercase')}>
                {meta && <p className='text-sm text-black'>{meta}</p>}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <>
      <section className='flex gap-4 h-[268px] relative'>
        <Photo
          src={'/memories/2.jpg'}
          meta='2024-04-13'
          alt='Brian and Lily'
          width={324}
          height={239}
          rotate={-6}
          left={-76}
          index={1}
        />
        <Photo
          src={'/memories/4.jpg'}
          meta='2023-12-10'
          alt='my e-bike'
          width={230}
          height={250}
          rotate={6.3}
          left={160}
          index={2}
          flipDirection='left'
        />
        <Photo
          src={'/memories/3.jpg'}
          meta='2024-02-26'
          alt='Texas'
          width={280}
          height={235}
          rotate={-5.4}
          left={300}
          index={3}
        />
        <Photo
          src={'/memories/1.jpg'}
          meta='2023-10-31'
          alt={'Snowboarding in Colorado'}
          width={220}
          height={260}
          rotate={7.6}
          left={530}
          index={4}
          flipDirection='left'
        />
      </section>
    </>
  );
}
