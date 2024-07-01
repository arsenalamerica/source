'use client';

import { Boundaries } from '@bjeco/blocks';
import { isDevelopment } from '@arsenalamerica/utils';
import NextGameComponent from './NextGameComponent';
import NextGameError from './NextGameError';
import NextGameLoading from './NextGameLoading';

export function NextGame() {
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
