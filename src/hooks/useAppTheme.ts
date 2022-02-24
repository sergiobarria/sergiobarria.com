import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

export const useAppTheme = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, resolvedTheme, setTheme } = useTheme();

  // Wait until app is mounted to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  const currentTheme = resolvedTheme === 'system' ? systemTheme : resolvedTheme;

  return { mounted, currentTheme, setTheme };
};
