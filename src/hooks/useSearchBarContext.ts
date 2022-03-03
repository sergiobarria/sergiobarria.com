import * as React from 'react';

import { SearchContext } from '@/context/searchbar.context';

export function useSearchBarContext() {
  const ctx = React.useContext(SearchContext);

  if (!ctx) {
    throw new Error(
      'Search Bar Context should be used inside a Context Provider'
    );
  }

  return ctx;
}
