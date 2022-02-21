import React from 'react';

import clsx from 'clsx';
import { Divide as Hamburger } from 'hamburger-react';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FloatingButton({ isOpen, setIsOpen }: Props) {
  return (
    <div
      className={clsx(
        'fixed bottom-10 right-10 rounded-full',
        'z-50  sm:hidden',
        isOpen && 'bg-white text-primary',
        !isOpen && 'bg-primary text-white'
      )}
    >
      <Hamburger size={24} toggled={isOpen} toggle={setIsOpen} />
    </div>
  );
}
