'use client';

import { SWRConfig } from 'swr';

export interface SWRProviderProps {
  children?: React.ReactNode;
}

// TODO: Move this to a reusable location
const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.pnwarmory.com'
    : 'http://localhost:3333';

const FIXTURES_NEXT_PLACEHOLDER = {
  data: [
    {
      id: 18842461,
      sport_id: 1,
      league_id: 8,
      season_id: 21646,
      stage_id: 77464011,
      group_id: null,
      aggregate_id: null,
      round_id: 307160,
      state_id: 1,
      venue_id: 204,
      name: 'Loading...',
      starting_at: '2023-12-28 20:15:00',
      result_info: null,
      leg: '1/1',
      details: null,
      length: 90,
      placeholder: true,
      has_odds: true,
      starting_at_timestamp: 1703794500,
      league: {
        id: 8,
        sport_id: 1,
        country_id: 462,
        name: 'Premier League',
        image_path: 'https://cdn.sportmonks.com/images/soccer/leagues/8/8.png',
      },
      participants: [
        {
          id: 19,
          sport_id: 1,
          country_id: 462,
          venue_id: 204,
          name: 'Arsenal',
          short_code: 'ARS',
          image_path:
            'https://cdn.sportmonks.com/images/soccer/teams/19/19.png',
          meta: { location: 'home', winner: null, position: 1 },
        },
        {
          id: 1,
          sport_id: 1,
          country_id: 462,
          venue_id: 214,
          name: 'West Ham United',
          short_code: 'WHU',
          image_path: 'https://cdn.sportmonks.com/images/soccer/teams/1/1.png',
          meta: { location: 'away', winner: null, position: 6 },
        },
      ],
      scores: [],
      venue: {
        id: 204,
        city_id: 51663,
        country_id: 462,
        name: 'Emirates Stadium',
        city_name: 'London',
      },
    },
  ],
};

export default function SWRProvider({ children, ...rest }: SWRProviderProps) {
  return (
    <SWRConfig
      {...rest}
      value={{
        fetcher: (resource, init) =>
          fetch(new URL(resource, API_BASE_URL).href, init).then((res) =>
            res.json(),
          ),
        suspense: true,
        fallback: { 'fixtures/next': FIXTURES_NEXT_PLACEHOLDER },
      }}
    >
      {children}
    </SWRConfig>
  );
}
