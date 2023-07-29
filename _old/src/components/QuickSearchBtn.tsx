import * as React from 'react';

import clsx from 'clsx';
import { BsSearch } from 'react-icons/bs';

import { useSearchBarContext } from '@/hooks/useSearchBarContext';

export default function QuickSearchBtn() {
  const { isOpen, onOpen, onClose } = useSearchBarContext();

  function onClickHandler() {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }

  return (
    <button
      type='button'
      className={clsx(
        'flex items-center rounded-md px-3 py-2.5 text-sm leading-6 ring-1',
        'ring-1 ring-slate-300 transition hover:text-slate-700 hover:ring-slate-400',
        'space-x-3 text-slate-600 focus:outline-none md:py-1.5'
      )}
      onClick={onClickHandler}
    >
      <BsSearch />
      <span className='hidden md:block'>Quick Search</span>
      <span className='hidden md:block'>
        <span className='sr-only'>Press</span>
        <kbd className='font-sans'>
          <abbr title='Command' className='no-underline'>
            ⌘
          </abbr>
        </kbd>
        <span className='sr-only'> and </span>
        <kbd className='font-sans'>K</kbd>
        <span className='sr-only'> to search </span>
      </span>
    </button>
  );
}
