'use client';

import { useContext } from 'react';
import { BranchContext } from '@arsenalamerica/components';
import { Main, NextGame } from '@arsenalamerica/components';
import { SocialLinks } from '@arsenalamerica/components';

export interface HomeProps {
  params: { domain: string };
}

export default function Home() {
  const { data: branchData, Logo } = useContext(BranchContext);

  return (
    <Main variant="landing">
      {Logo && <Logo title={branchData.name} role="img" />}
      <NextGame />
      {branchData.social && <SocialLinks links={branchData.social} />}
    </Main>
  );
}
