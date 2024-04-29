'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

const variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

const PageTransition = ({ children }: { children: ReactNode }) => (
  <AnimatePresence>
    <motion.div initial='initial' animate='enter' variants={variants}>
      {children}
    </motion.div>
  </AnimatePresence>
);

export default PageTransition;
