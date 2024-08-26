import { season } from '@arsenalamerica/utils';

import {
  ARSENAL_TEAM_ID,
  EntityBase,
  Sportmonks,
  sportmonks,
} from './sportmonks';

type Participant = {
  short_code: string;
  meta: { location: string };
} & EntityBase;

// https://docs.sportmonks.com/football/tutorials-and-guides/tutorials/includes/states
// Current states not being handled:
export const UNHANDLED_STATES = [
  'SUSPENDED',
  'CANCELLED',
  'WALKOVER',
  'ABANDONED',
  'DELAYED',
  'AWARDED',
  'POSTPONED',
];

export const REGULAR_TIME_ACTIVE_STATES = [
  'INPLAY_1ST_HALF',
  'HT',
  'INPLAY_2ND_HALF',
];

export const EXTRA_TIME_ACTIVE_STATES = [
  'BREAK',
  'INPLAY_ET',
  'ETB',
  'AET',
  'PEN_BREAK',
  'INPLAY_PENALTIES',
];

export const ACTIVE_GAME_STATES = [
  ...REGULAR_TIME_ACTIVE_STATES,
  ...EXTRA_TIME_ACTIVE_STATES,
];

export type LeagueGameStates =
  | 'NS'
  | keyof typeof REGULAR_TIME_ACTIVE_STATES
  | 'FT';

export type KnockoutGameStates =
  | 'NS'
  | keyof typeof REGULAR_TIME_ACTIVE_STATES
  | 'FT'
  | keyof typeof EXTRA_TIME_ACTIVE_STATES
  | 'FT_PEN';

export type FixtureEntity = {
  id: number;
  league: EntityBase;
  name: string;
  participants: Participant[];
  starting_at_timestamp: number;
  starting_at: string;
  state_id: number;
  state: {
    id: number;
    state: string;
    name: string;
    short_name: string;
    developer_name: string;
  };
  periods: {
    id: number;
    fixture_id: number;
    type_id: number;
    started: number;
    ended: number;
    counts_from: number;
    ticking: boolean;
    sort_order: number;
    description: string;
    time_added: number;
    period_length: number;
    minutes: number;
    seconds: number;
    has_timer: boolean;
  }[];
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
