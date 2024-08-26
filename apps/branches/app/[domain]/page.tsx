'use client';

import { useContext } from 'react';

import {
  BranchContext,
  Main,
  NextGame,
  SocialLinks,
  SWRProvider,
} from '@arsenalamerica/components';
import { branchLogo } from '@arsenalamerica/data';

export interface HomeProps {
  params: { domain: string };
}

export default function Home() {
  const branch = useContext(BranchContext);
  const Logo = branchLogo[branch.domain];

  return (
    <Main variant="landing">
      {Logo && <Logo title={branch.name} role="img" />}
      <SWRProvider>
        <NextGame />
      </SWRProvider>

      {branch.social && <SocialLinks links={branch.social} />}
    </Main>
  );
}
