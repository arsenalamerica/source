'use client';

import { Boundaries } from '@bjeco/blocks';
import NextGameComponent from './NextGameComponent';
import NextGameError from './NextGameError';
import NextGameLoading from './NextGameLoading';

export function NextGame() {
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <Boundaries
      ErrorComponent={isDevelopment ? undefined : NextGameError}
      SuspenseComponent={NextGameLoading}
    >
      <NextGameComponent />
    </Boundaries>
  );
}

export default NextGame;
