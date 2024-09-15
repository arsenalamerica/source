import { FixtureCard } from '@arsenalamerica/components';

import { getFixtures } from '../../../endpoints/fixtures';

export default async function FixturesPage() {
  const upcomingFixtures = await getFixtures();

  return (
    <>
      {upcomingFixtures?.map((fixture) => {
        const { id } = fixture;
        return <FixtureCard key={id} {...fixture} />;
      })}
      {/* <code>
        <pre>{JSON.stringify(upcomingFixtures, null, 2)}</pre>
      </code> */}
    </>
  );
}
