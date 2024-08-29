'use client'; // Needed because we are dealing with dates relative to the user. We can move this to the game info section later on to encapsulate the date

import styles from './FixtureCard.module.scss';

import Image from 'next/image';

import {
  FixtureEntity,
  REGULAR_TIME_ACTIVE_STATES,
} from '@arsenalamerica/sportmonks';
import { shite } from '@arsenalamerica/utils';

import { Card } from '../Card';

import { FixtureCardTeam } from './FixtureCardTeam';

export function FixtureCard({
  name,
  participants,
  starting_at_timestamp,
  league,
  scores,
  periods,
  venue,
  state,
  ...rest
}: FixtureEntity) {
  const gameTime = new Date(starting_at_timestamp * 1000).toLocaleTimeString(
    [],
    { timeStyle: 'short' },
  );
  const gameDate = new Date(starting_at_timestamp * 1000).toLocaleDateString(
    [],
    { dateStyle: 'medium' },
  );

  const localTeam = participants.find((team) => team.meta.location === 'home');
  const visitorTeam = participants.find(
    (team) => team.meta.location === 'away',
  );

  const currentScores = new Map(
    scores
      ?.filter((score) => score.description === 'CURRENT')
      .map((score) => [score.score.participant, score.score.goals]) || [],
  );

  const isActive = new Set(REGULAR_TIME_ACTIVE_STATES).has(state.state);
  const ticking = periods.find((period) => period.ticking);
  const isFuture = state.state === 'NS';

  return (
    <Card render={<section />} className={styles._}>
      <h2 className="screen-reader-only">{name}</h2>
      <section className={styles.Details}>
        {localTeam && <FixtureCardTeam {...localTeam} />}
        <div className={styles.Separator}>
          <div className={styles.Date}>
            {isActive ? (ticking ? ticking.minutes : 'HT') : gameDate}
          </div>
          <div className={styles.Score}>
            {isFuture
              ? gameTime
              : currentScores.get('home') + '-' + currentScores.get('away')}
          </div>
        </div>
        {visitorTeam && <FixtureCardTeam {...visitorTeam} />}
      </section>
      <footer className={styles.Metadata}>
        <div>
          <Image
            src={league.image_path}
            alt={league.name + ' Logo'}
            width={25}
            height={25}
          />
          {league.name}
        </div>
        <div>{shite(venue.name)}</div>
      </footer>
    </Card>
  );
}
