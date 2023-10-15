'use client';

import { useContext } from 'react';
import useSWR from 'swr';
import styles from './NextGame.module.scss';
import { dateFromEpoch, timeFromEpoch } from '@arsenalamerica/utils';
import { BranchContext } from '../BranchContext/BranchContext';

export function NextGame() {
  const branch = useContext(BranchContext);
  const { data, error, isLoading } = useSWR('fixtures');

  if (error) {
    console.error(error);
    return <div className={styles._}>An error has occurred.</div>;
  }
  if (isLoading) return <div className={styles._}>Loading...</div>;
  if (!data.data) {
    console.log(data);
    return null;
  }

  // Get the next game
  // TODO: Make this a query parameter on the API or a separate route
  const upcoming = data.data.find(
    ({ state_id }: { state_id: number }) => state_id === 1,
  );

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

export default NextGame;
