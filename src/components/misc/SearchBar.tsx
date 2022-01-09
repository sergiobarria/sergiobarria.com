import { BsSearch } from 'react-icons/bs'

interface IProps {
  setSearchValue: any
  placeholderText: string
}

export default function SearchBar({ setSearchValue, placeholderText }: IProps) {
  const styles = {
    searchBar:
      'block w-full px-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-md outline-none dark:border-gray-900 focus:ring-gray-300 focus:border-main focus:ring-1 dark:bg-gray-800 dark:text-gray-100',
  }

  return (
    <div className="relative w-full mx-auto mb-16">
      <input
        aria-label="search bar"
        type="text"
        onChange={e => setSearchValue(e.target.value)}
        placeholder={placeholderText}
        className={styles.searchBar}
      />
      <BsSearch className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300" />
    </div>
  )
}
