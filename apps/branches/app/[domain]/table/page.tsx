import { LeagueTable, Main } from '@arsenalamerica/components';

import { getStandings } from '../../../endpoints/standings';

export default async function LeagueTablePage() {
  const standings = await getStandings();
  return (
    <Main>
      <LeagueTable standings={standings} />
    </Main>
  );
}
