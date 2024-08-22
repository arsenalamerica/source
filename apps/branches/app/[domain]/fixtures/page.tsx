import { FixtureCard } from '@arsenalamerica/components';

import { getFixtures } from '../../../endpoints/fixtures';

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 900; // 15 minutes

export default async function FixturesPage() {
  const upcomingFixtures = await getFixtures();

  return (
    <>
      {/* <FixtureCard {...fixtureData} /> */}
      {upcomingFixtures.map((fixture) => {
        const { id } = fixture;
        return <FixtureCard key={id} {...fixture} />;
      })}
      <code>
        <pre>{JSON.stringify(upcomingFixtures, null, 2)}</pre>
      </code>
    </>
  );
}
