'use client';

import { GameCard, SWRProvider } from '@arsenalamerica/components';

export default function GameCardPage() {
  return (
    <SWRProvider>
      <GameCard />
    </SWRProvider>
  );
}
