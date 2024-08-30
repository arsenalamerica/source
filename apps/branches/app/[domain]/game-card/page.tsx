import { GameCard } from '@arsenalamerica/components';
import { branchData } from '@arsenalamerica/data';

import { getNextFixture } from '../../../endpoints/fixtures';

export default async function GameCardPage({
  params,
}: {
  params: { domain: string };
}) {
  const branch = branchData[params.domain];

  const [nextFixture] = await getNextFixture();

  return <GameCard {...nextFixture} branch={branch} />;
}
