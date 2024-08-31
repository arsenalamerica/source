import { Heading } from '@ariakit/react';
import {
  FixtureCard,
  Main,
  NextGame,
  SocialLinks,
} from '@arsenalamerica/components';
import { branchData, branchLogo } from '@arsenalamerica/data';

import { getNextFixture } from '../../endpoints/fixtures';

export interface HomeProps {
  params: { domain: string };
}

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 45; // 45 seconds

export default async function Home({ params }: { params: { domain: string } }) {
  const branch = branchData[params.domain];
  const Logo = branchLogo[branch?.domain];

  const [nextFixture] = await getNextFixture();

  return (
    <Main>
      {Logo && <Logo title={branch.name} role="img" />}
      <Heading>Next Match</Heading>
      <FixtureCard {...nextFixture} />
      <NextGame fixture={nextFixture} branch={branch} />
      {branch?.social && <SocialLinks links={branch.social} />}
    </Main>
  );
}
