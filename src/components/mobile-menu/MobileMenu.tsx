import React from 'react';

import { motion } from 'framer-motion';

import { useDimensions } from '@/hooks/useDimensions';

import FloatingButton from './FloatingButton';
import Navigation from './Navigation';

const sidebar = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(10px at 325px 780px',
    transition: {
      delay: 0.5,
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
    >
      <motion.div
        className='absolute inset-0 z-10 bg-primary'
        variants={sidebar}
      />

      <Navigation isOpen={isOpen} />

      <FloatingButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.nav>
  );
}
