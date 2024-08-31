const loadingFixtures = Array.from({ length: 25 });

import { FixtureCardLoading } from '@arsenalamerica/components';

export default async function FixturesPageLoading() {
  return loadingFixtures?.map((fixture, i) => <FixtureCardLoading key={i} />);
}
