import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { RiSunLine } from 'react-icons/ri';
import { FaMoon } from 'react-icons/fa';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState('false');
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center w-10 h-10 p-3 text-2xl bg-gray-200 rounded dark:bg-gray-800"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (theme === 'dark' ? <RiSunLine /> : <FaMoon />)}
    </button>
  );
};

export default ThemeSwitch;
