import * as React from 'react';

import { useKeyboardEvents } from '@/hooks/useKeyboardEvents';

interface SearchState {
  isOpen: boolean;
  query: string | null;
  onOpen: () => void;
  onClose: () => void;
  onInput: (value: string) => void;
}

export const SearchContext = React.createContext<SearchState | undefined>(
  {} as SearchState
);

interface ProviderProps {
  children: React.ReactNode;
}

export function SearchProvider({ children }: ProviderProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [query, setQuery] = React.useState<string | null>(null);

  const onOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = React.useCallback(
    (value: string) => {
      setQuery(value);
    },
    [setQuery]
  );

  useKeyboardEvents({ isOpen, onOpen, onClose });

  const value = { isOpen, onOpen, onClose, onInput, query };

  return (
    <>
      <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    </>
  );
}
