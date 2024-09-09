'use client';

import styles from './GameCard.module.scss';

import { Textfit } from 'react-textfit';

import { dateFromEpoch, epochToTime } from '@arsenalamerica/utils';

export function GameCardTime({
  starting_at_timestamp,
}: {
  starting_at_timestamp: number;
}) {
  const fixtureDate = dateFromEpoch(starting_at_timestamp);
  // const fixtureTime = timeFromEpoch(starting_at_timestamp);
  const fixtureTime = new Date(
    epochToTime(starting_at_timestamp),
  ).toLocaleTimeString('en-US', {
    timeZone: 'America/Los_Angeles',
    timeStyle: 'short',
  });

  return (
    <div className={styles.GameTime}>
      <Textfit mode="single">
        <h2>{fixtureDate}</h2>
      </Textfit>
      <Textfit mode="single">
        <h2>{fixtureTime} @ Doyle&apos;s</h2>
      </Textfit>
    </div>
  );
}
