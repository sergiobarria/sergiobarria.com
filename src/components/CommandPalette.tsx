import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Combobox, Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { BsSearch } from 'react-icons/bs';

interface Props {
  data: {
    _id: string;
    title: string;
    slug: string;
  }[];
}

export default function CommandPalette({ data }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const router = useRouter();

  const filteredPosts = query
    ? data.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  function handleChange(value: string) {
    setIsOpen(false);
    router.push(`/blog/${value}`);
  }

  useEffect(() => {
    function onkeydown(e: KeyboardEvent) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        setIsOpen((prevValue) => !prevValue);
      }
    }

    window.addEventListener('keydown', onkeydown);

    return () => window.removeEventListener('keydown', onkeydown);
  }, []);

  return (
    <Transition.Root
      show={isOpen}
      as={React.Fragment}
      afterLeave={() => setQuery('')}
    >
      <Dialog
        onClose={setIsOpen}
        className={clsx('fixed inset-0 overflow-y-auto p-4 pt-[25vh]')}
      >
        <Transition.Child
          enter='duration-300 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-200 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-zinc-900/75' />
        </Transition.Child>
        <Transition.Child
          enter='duration-300 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-200 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Combobox
            as='div'
            value=''
            onChange={handleChange}
            className={clsx(
              'relative mx-auto max-w-xl overflow-hidden rounded-xl shadow-2xl',
              'divide-y divide-gray-100 bg-white ring-1 ring-black/5'
            )}
          >
            <div className='flex items-center px-4'>
              <BsSearch size={24} className='text-gray-500' />
              <Combobox.Input
                onChange={(e) => setQuery(e.target.value)}
                className={clsx(
                  'h-12 w-full border-0 bg-transparent text-sm text-gray-800',
                  'placeholder-gray-400 focus:ring-0'
                )}
                placeholder='Search...'
              />
            </div>
            {filteredPosts.length > 0 && (
              <Combobox.Options
                static
                className='max-h-96 overflow-y-auto py-4 text-sm'
              >
                {filteredPosts.map((post) => (
                  <Combobox.Option key={post._id} value={post.slug}>
                    {({ active }) => (
                      <div
                        className={clsx(
                          'px-4 py-2',
                          active ? 'bg-primary' : 'bg-white'
                        )}
                      >
                        <p
                          className={clsx(
                            active ? 'text-white' : 'text-gray-500'
                          )}
                        >
                          {post.title}
                        </p>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}

            {query && filteredPosts.length === 0 && (
              <p className='p-4 text-sm text-gray-500'>No results found...</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
