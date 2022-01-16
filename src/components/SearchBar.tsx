import { BsSearch } from 'react-icons/bs';

interface IProps {
  setSearchValue: any;
  placeholderText: string;
}

export default function SearchBar({ setSearchValue, placeholderText }: IProps) {
  return (
    <div className='relative w-full mx-auto mb-16'>
      <input
        aria-label='search bar'
        type='text'
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholderText}
        className='w-full border-0 rounded focus:text-gray-700 ring-gray-300 ring-1 focus:outline-none focus:ring-primary focus:border-0'
      />
      <BsSearch className='absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300' />
    </div>
  );
}
