'use client';

import styles from './NextGame.module.scss';

import { useContext } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import useSWR from 'swr';

import { shite } from '@arsenalamerica/utils';
import { dateFromEpoch, timeFromEpoch } from '@arsenalamerica/utils';

import { BranchContext } from '../BranchContext/BranchContext';
import { Card } from '../Card/Card';

import NextGameLoading from './NextGameLoading';

export function NextGameComponent() {
  const { showBoundary } = useErrorBoundary();
  const branch = useContext(BranchContext);
  const { data, error } = useSWR('fixtures/next');

  if (error) {
    showBoundary(error);
  }
  if (!data[0]) {
    // console.log(data);
    return null;
  }

  // Get the next game
  const upcoming = data[0];

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

  const fixtureTime24 = new Date(
    starting_at_timestamp * 1000,
  ).toLocaleTimeString(undefined, {
    timeStyle: 'short',
    hour12: false,
  });

  // THIS IS A TEMPORARY HARD-CODED FIX
  const viewingPub = branch.pubs
    ? fixtureTime24 > '06:00' // Note to compare times here, we need to use 24-hour format, including the leading zero
      ? branch.pubs[0]
      : branch.pubs[1]
    : branch.pub;

  return (
    <Card className={styles._}>
      <h2>Next Match Viewing</h2>
      <h3>{shite(fixtureName)}</h3>
      <p>
        {fixtureDate} {adjustedFixtureTime}
      </p>
      {viewingPub && (
        <address>
          <a href={viewingPub.website}>
            {viewingPub.name}
            <br />
            {viewingPub.address.replace(',', '\n')}
          </a>
        </address>
      )}
    </Card>
  );
}

export default NextGameComponent;
