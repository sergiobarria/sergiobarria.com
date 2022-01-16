import * as React from 'react';

import clsx from 'clsx';

const PreloadContext = React.createContext<boolean>(false);

export function PreloadProvider({ children }: { children: React.ReactNode }) {
  const [isPreloaded, setIsPreloaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(true);
    }, 200);
  }, []);

  return (
    <PreloadContext.Provider value={isPreloaded}>
      <div
        className={clsx(
          'flex w-full inset-0 justify-center items-center bg-gray-50 transition-opacity dark:bg-gray-900',
          !isPreloaded && 'opacity-0',
          isPreloaded && 'opacity-1'
        )}
      >
        {children}
      </div>
    </PreloadContext.Provider>
  );
}

export const usePreloadState = () => React.useContext(PreloadContext);
