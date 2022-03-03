import React from 'react';

import { motion } from 'framer-motion';

import { useDimensions } from '@/hooks/useDimensions';

import FloatingButton from './FloatingButton';
import Navigation from './Navigation';

const sidebar = {
  open: (height = 750) => ({
    clipPath: `circle(${height * 2 + 200}px at right 4rem bottom 4rem)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at right 4rem bottom 4rem)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className='md:hidden'
    >
      <motion.div
        className='fixed inset-0 z-10 bg-primary dark:bg-gray-600 sm:hidden'
        variants={sidebar}
      />

      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />

      <FloatingButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.nav>
  );
}
