import { BsSearch } from 'react-icons/bs';

interface IProps {
  setSearchValue: any;
  placeholderText: string;
}

export default function SearchBar({ setSearchValue, placeholderText }: IProps) {
  return (
    <div className='relative mx-auto mb-16 w-full'>
      <input
        aria-label='search bar'
        type='text'
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholderText}
        className='w-full rounded border-0 ring-1 ring-gray-300 focus:border-0 focus:text-gray-700 focus:outline-none focus:ring-primary'
      />
      <BsSearch className='absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300' />
    </div>
  );
}
