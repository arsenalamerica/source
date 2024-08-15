'use client';

import styles from './NextGame.module.scss';

import { useContext } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import useSWR from 'swr';

import { dateFromEpoch, timeFromEpoch } from '@arsenalamerica/utils';

import { BranchContext } from '../BranchContext/BranchContext';

import NextGameLoading from './NextGameLoading';

export function NextGameComponent() {
  const { showBoundary } = useErrorBoundary();
  const branch = useContext(BranchContext);
  const { data, error } = useSWR('fixtures/next');

  if (error) {
    showBoundary(error);
  }
  if (!data.data) {
    console.log(data);
    return null;
  }

  // Get the next game
  const upcoming = data.data[0];

  const {
    name: fixtureName,
    starting_at_timestamp,
    placeholder: isPlaceholder,
  } = upcoming;

  if (isPlaceholder) {
    return <NextGameLoading />;
  }
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
