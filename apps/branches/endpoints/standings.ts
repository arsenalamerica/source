import { StandingEntity } from '@arsenalamerica/sportmonks';

import { api } from './_api';

export async function getStandings(): Promise<StandingEntity[]> {
  return api.url(`/standings`).get() as Promise<StandingEntity[]>;
}
