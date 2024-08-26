import { LeagueTable } from '@arsenalamerica/components';

import { getStandings } from '../../../endpoints/standings';

export default async function LeagueTablePage() {
  const standings = await getStandings();
  return <LeagueTable standings={standings} />;
}
