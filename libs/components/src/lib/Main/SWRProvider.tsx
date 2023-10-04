'use client';

import { SWRConfig } from 'swr';

export interface SWRProviderProps {
  children?: React.ReactNode;
}

export default function SWRProvider({ children, ...rest }: SWRProviderProps) {
  return (
    <SWRConfig
      {...rest}
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
