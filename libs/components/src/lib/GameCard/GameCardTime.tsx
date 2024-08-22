'use client';

import styles from './GameCard.module.scss';

import { Textfit } from 'react-textfit';

import { dateFromEpoch, timeFromEpoch } from '@arsenalamerica/utils';

export function GameCardTime({
  starting_at_timestamp,
}: {
  starting_at_timestamp: number;
}) {
  const fixtureDate = dateFromEpoch(starting_at_timestamp);
  const fixtureTime = timeFromEpoch(starting_at_timestamp);

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
