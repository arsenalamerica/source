'use client';

import styles from './GameCard.module.scss';

import { Textfit } from 'react-textfit';

export function GameCardTime({
  fixtureDate,
  fixtureTime,
}: {
  fixtureDate: string;
  fixtureTime: string;
}) {
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
