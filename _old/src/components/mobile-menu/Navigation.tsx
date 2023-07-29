import React from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { routes } from '@/fixtures/routes';

import MenuItem from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation({ isOpen, setIsOpen }: Props) {
  return (
    <motion.ul
      variants={variants}
      className={clsx(
        !isOpen && 'hidden',
        'fixed inset-0 z-20 space-y-8 text-center',
        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform'
      )}
    >
      {routes.map((route) => (
        <MenuItem
          key={route.id}
          text={route.text}
          href={route.route}
          setIsOpen={setIsOpen}
        />
      ))}
    </motion.ul>
  );
}
