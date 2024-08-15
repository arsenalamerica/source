'use client';
import styles from './FixtureCard.module.scss';

import { FixtureCardTeam } from './FixtureCardTeam';
import { Entity } from './types';

export interface FixtureCardProps {
  awayScore: number;
  awayTeam: Entity;
  competition: Entity;
  date: string;
  elapsed: string;
  homeScore: number;
  homeTeam: Entity;
  location: string;
}

const HOME_TEAM = {
  name: 'Arsenal',
  image: 'https://cdn.sportmonks.com/images/soccer/teams/19/19.png',
};

const AWAY_TEAM = {
  name: 'Liverpool',
  image: 'https://cdn.sportmonks.com/images/soccer/teams/8/8.png',
};

export function FixtureCard({
  awayScore,
  awayTeam = AWAY_TEAM,
  competition,
  date,
  elapsed,
  homeScore,
  homeTeam = HOME_TEAM,
  location,
  ...rest
}: FixtureCardProps) {
  return (
    <article className={styles._}>
      {/* <h2>Hidden Game Title</h2> */}
      <section className={styles.Details}>
        <FixtureCardTeam {...homeTeam} />
        <div className={styles.Separator}>
          <div className={styles.Date}>7:00am</div>
          <div className={styles.Score}>1-2</div>
          <div className={styles.Elapsed}>65'</div>
        </div>
        <FixtureCardTeam {...awayTeam} />
      </section>
      <footer className={styles.Metadata}>
        <div>Competition</div>
        <div>Location</div>
      </footer>
    </article>
  );
}
