import { FixtureEntity } from '@arsenalamerica/sportmonks';

import api from './_api';

export async function getFixtures(): Promise<FixtureEntity[]> {
  return api.url(`/fixtures`).get() as Promise<FixtureEntity[]>;
}

export async function getFixtureNext(): Promise<FixtureEntity[]> {
  return api.url(`/fixtures/next`).get() as Promise<FixtureEntity[]>;
}
