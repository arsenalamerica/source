import { FixtureEntity } from '@arsenalamerica/sportmonks';

import { api, apiLive } from './_api';

export async function getFixtures(): Promise<FixtureEntity[]> {
  return api.url(`/fixtures`).get() as Promise<FixtureEntity[]>;
}

export async function getNextFixture(): Promise<FixtureEntity[]> {
  return apiLive.url(`/fixtures/next`).get() as Promise<FixtureEntity[]>;
}
