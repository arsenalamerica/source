import { GameCard } from '@arsenalamerica/components';
import { branchData } from '@arsenalamerica/data';

import { getNextFixture } from '../../../endpoints/fixtures';

export default async function GameCardPage(props: {
  params: Promise<{ domain: string }>;
}) {
  const params = await props.params;
  const branch = branchData[params.domain];

  const [nextFixture] = await getNextFixture();

  return <GameCard {...nextFixture} branch={branch} />;
}
