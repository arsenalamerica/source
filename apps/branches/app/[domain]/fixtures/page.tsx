import { FixtureCard } from '@arsenalamerica/components';

import { getFixtures, getNextFixture } from '../../../endpoints/fixtures';

export default async function FixturesPage() {
  const upcomingFixtures = await getFixtures();
  const [{ id: nextFixtureId }] = await getNextFixture();

  return (
    <>
      {upcomingFixtures?.map((fixture) => {
        const { id, ...restFixture } = fixture;
        const isNext = id === nextFixtureId;
        return (
          <FixtureCard
            key={id}
            id={isNext ? 'next-fixture' : undefined}
            {...restFixture}
          />
        );
      })}
      {/* <code>
        <pre>{JSON.stringify(upcomingFixtures, null, 2)}</pre>
      </code> */}
    </>
  );
}
