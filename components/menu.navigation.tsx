'use client';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';
import { ReactNode } from 'react';

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const NavigationMenu = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={transition}
    >
      <div className="pt-3 md:pt-0">
        <motion.div
          transition={transition}
          layoutId="active" // layoutId ensures smooth animation
          className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl md:shadow-none md:border-none md:bg-transparent md:dark:bg-transparent"
        >
          <motion.div
            layout // layout ensures smooth animation
            className="w-max h-full p-4 md:p-0"
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavigationMenu;
