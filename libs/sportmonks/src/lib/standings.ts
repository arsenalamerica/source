import { Sportmonks, sportmonks } from './sportmonks';

// Needed for the static table endpoint - We will need to find a way to look this up based on the
// team at some point maybe create some sort of highly cached current season endpoint.
// FOR NOW THIS HAS TO BE UPDATED MANUALLY EVERY SEASON!!!
const TEMP_SEASON_ID = 25583;

export type StandingEntity = {
  id: number;
  participant_id: number;
  sport_id: number;
  league_id: number;
  season_id: number;
  stage_id: number;
  group_id: number;
  round_id: number;
  standing_rule_id: number;
  position: number;
  result: string;
  points: number;
  participant: {
    id: number;
    sport_id: number;
    country_id: number;
    venue_id: number;
    name: string;
    short_code: string;
    image_path: string;
  };
  form: [];
  stats: {
    'overall-matches-played': number;
    'overall-won': number;
    'overall-draw': number;
    'overall-lost': number;
    'overall-goals-for': number;
    'overall-goals-against': number;
    'home-matches-played': number;
    'home-won': number;
    'home-draw': number;
    'home-lost': number;
    'home-scored': number;
    'home-conceded': number;
    'away-matches-played': number;
    'away-won': number;
    'away-draw': number;
    'away-lost': number;
    'away-scored': number;
    'away-conceded': number;
    'goal-difference': number;
    'home-points': number;
    'away-points': number;
    'overall-points': number;
  };
  details: { value: number; type: { code: string } }[];
};

export type StandingsEndpoint = {
  data: StandingEntity[];
} & Sportmonks;

export async function smStandings(
  id: string | undefined,
  query: object,
): Promise<StandingsEndpoint> {
  return sportmonks
    .url(`/standings/seasons/${TEMP_SEASON_ID}`)
    .query(query)
    .get() as Promise<StandingsEndpoint>;
}
