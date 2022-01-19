import React, { useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import clsx from 'clsx';
import { Divide as Hamburger } from 'hamburger-react';
import useDelayedRender from 'use-delayed-render';

import styles from '@/styles/mobile-menu.module.css';

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({ isOpen, setIsOpen }: IProps) {
  const { mounted: isMounted, rendered: isMenuRendered } = useDelayedRender(
    isOpen,
    { enterDelay: 20, exitDelay: 300 }
  );
  const router = useRouter();

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line
  }, [router.pathname]);

  return (
    <>
      <div className='flex ml-4 md:hidden'>
        <Hamburger size={24} toggled={isOpen} toggle={setIsOpen} />
      </div>

      {isMounted && (
        <ul
          className={clsx(
            styles.menu,
            'flex flex-col absolute top-20 bg-gray-50 dark:bg-gray-900',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li className='mobile-link' style={{ transitionDelay: '150ms' }}>
            <Link href='/'>
              <a className='flex w-auto pb-4'>Home</a>
            </Link>
          </li>
          <li className='mobile-link' style={{ transitionDelay: '200ms' }}>
            <Link href='/about'>
              <a className='flex w-auto pb-4'>About</a>
            </Link>
          </li>
          <li className='mobile-link' style={{ transitionDelay: '250ms' }}>
            <Link href='/blog'>
              <a className='flex w-auto pb-4'>Blog</a>
            </Link>
          </li>
          <li className='mobile-link' style={{ transitionDelay: '300ms' }}>
            <Link href='/portfolio'>
              <a className='flex w-auto pb-4'>Portfolio</a>
            </Link>
          </li>
          <li className='mobile-link' style={{ transitionDelay: '350ms' }}>
            <Link href='/library'>
              <a className='flex w-auto pb-4'>Library</a>
            </Link>
          </li>
          <li className='mobile-link' style={{ transitionDelay: '400ms' }}>
            <Link href='/contact'>
              <a className='flex w-auto pb-4'>Contact</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
