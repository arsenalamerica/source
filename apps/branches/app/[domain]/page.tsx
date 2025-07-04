import { Suspense } from 'react';
import { Heading } from '@ariakit/react';
import { FixtureCard, Main, NextGame } from '@arsenalamerica/components';
import { branchData, branchLogo } from '@arsenalamerica/data';

import { getNextFixture } from '../../endpoints/fixtures';

export interface HomeProps {
  params: { domain: string };
}

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 45; // 45 seconds

export default async function Home(props: {
  params: Promise<{ domain: string }>;
}) {
  const params = await props.params;
  const branch = branchData[params.domain];
  const Logo = branchLogo[branch?.domain];

  // TODO: Move this into the fixture card itself or the suspense boundary will never catch an issue (500 returns an object not an array)
  const [nextFixture] = await getNextFixture();

  return (
    <Main>
      {Logo && <Logo title={branch.name} role='img' />}
      <Heading>Next Match</Heading>
      <Suspense>
        <FixtureCard {...nextFixture} />
      </Suspense>
      <NextGame fixture={nextFixture} branch={branch} />
    </Main>
  );
}
