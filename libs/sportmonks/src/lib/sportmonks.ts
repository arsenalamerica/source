import wretch from 'wretch';
import QueryStringAddon from 'wretch/addons/queryString';

export type Sportmonks = {
  subscription: [];
  rate_limit: {
    resets_in_seconds: number;
    remaining: number;
    requested_entity: string;
  };
  timezone: string;
  pagination: {
    count: number;
    per_page: number;
    current_page: number;
    next_page: number | null;
    has_more: boolean;
  };
};

export type EntityBase = {
  id: number;
  name: string;
  image_path: string;
};

export const ARSENAL_TEAM_ID = 19;

export const sportmonks = wretch('https://api.sportmonks.com/v3/football', {
  cache: 'no-cache',
  // next: { revalidate: 5 },
})
  .headers({ Authorization: `${process.env['MONK_TOKEN']}` })
  .addon(QueryStringAddon)
  .errorType('json')
  .resolve((r) => r.json());
