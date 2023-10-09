'use client';

import { SWRConfig } from 'swr';

export interface SWRProviderProps {
  children?: React.ReactNode;
}

// TODO: Move this to a reusable location
const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.pnwarmory.com'
    : 'http://localhost:3333';

export default function SWRProvider({ children, ...rest }: SWRProviderProps) {
  return (
    <SWRConfig
      {...rest}
      value={{
        fetcher: (resource, init) =>
          fetch(new URL(resource, API_BASE_URL).href, init).then((res) =>
            res.json(),
          ),
      }}
    >
      {children}
    </SWRConfig>
  );
}
