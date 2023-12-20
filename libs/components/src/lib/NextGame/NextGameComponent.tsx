'use client';

import { useContext } from 'react';
import useSWR from 'swr';
import styles from './NextGame.module.scss';
import { dateFromEpoch, timeFromEpoch } from '@arsenalamerica/utils';
import { BranchContext } from '../BranchContext/BranchContext';
import NextGameError from './NextGameError';
import NextGameLoading from './NextGameLoading';

export function NextGameComponent() {
  const branch = useContext(BranchContext);
  const { data, error, isLoading } = useSWR('fixtures/next');

  // TODO: Update boundaries component to expose imperative hook to throw these errors instead of returning them here
  if (error) {
    console.error(error);
    return <NextGameError />;
  }
  if (isLoading) return <NextGameLoading />;
  if (!data.data) {
    console.log(data);
    return null;
  }

  // Get the next game
  const upcoming = data.data[0];

  const { name: fixtureName, starting_at_timestamp } = upcoming;

  const fixtureDate = dateFromEpoch(starting_at_timestamp);
  const fixtureTime = timeFromEpoch(starting_at_timestamp);
  const fakeDate = '1/1/2000 ';

  const isReplay = branch.pub?.replayTime
    ? new Date(fakeDate + branch.pub.replayTime) >
      new Date(fakeDate + fixtureTime)
    : false;

  const adjustedFixtureTime = isReplay
    ? branch.pub?.replayTime + ' (replay)'
    : fixtureTime;

  return (
    <div className={styles._}>
      <h2>Next Match Viewing</h2>
      <h3>{fixtureName}</h3>
      <p>
        {fixtureDate} {adjustedFixtureTime}
      </p>
      {branch.pub && (
        <address>
          <a href={branch.pub.website}>
            {branch.pub.name}
            <br />
            {branch.pub.address.replace(',', '\n')}
          </a>
        </address>
      )}

      {/* <pre>{JSON.stringify(upcoming, null, 2)}</pre>; */}
    </div>
  );
}

export default NextGameComponent;
