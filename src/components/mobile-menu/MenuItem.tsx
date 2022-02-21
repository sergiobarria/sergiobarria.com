import React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface Props {
  text: string;
  href: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuItem({ text, href, setIsOpen }: Props) {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='text-lg text-white'
      onClick={() => setIsOpen(false)}
    >
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </motion.li>
  );
}
