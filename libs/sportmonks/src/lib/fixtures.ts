import { season } from '@arsenalamerica/utils';

import {
  ARSENAL_TEAM_ID,
  EntityBase,
  Sportmonks,
  sportmonks,
} from './sportmonks';

type Participant = { meta: { location: string } } & EntityBase;

export type FixtureEntity = {
  id: number;
  league: EntityBase;
  name: string;
  participants: Participant[];
  starting_at_timestamp: number;
  starting_at: string;
  state_id: number;
  scores: {
    score: { goals: number; participant: string };
    description: string;
  }[];
  tvstations: { tvstation_id: number; country_id: number }[];
  venue: EntityBase;
};

export type FixturesEndpoint = {
  data: FixtureEntity[];
} & Sportmonks;

export async function smFixtures(
  id: string | undefined,
  query: object,
): Promise<FixturesEndpoint> {
  return sportmonks
    .url(`/fixtures/between/${season.start}/${season.end}/${ARSENAL_TEAM_ID}`)
    .query(query)
    .get() as Promise<FixturesEndpoint>;
}
