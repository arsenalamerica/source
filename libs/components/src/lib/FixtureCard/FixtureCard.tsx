'use client'; // Needed because we are dealing with dates relative to the user. We can move this to the game info section later on to encapsulate the date

import styles from './FixtureCard.module.scss';

import { Heading, HeadingLevel, VisuallyHidden } from '@ariakit/react';
import {
  FixtureEntity,
  REGULAR_TIME_ACTIVE_STATES,
} from '@arsenalamerica/sportmonks';
import { shite } from '@arsenalamerica/utils';

import { Card, CardProps } from '../Card';
import { LeagueLogo } from '../LeagueLogo';

import { FixtureCardTeam } from './FixtureCardTeam';

type FixtureCardProps = Omit<CardProps, 'id'> & FixtureEntity;

export function FixtureCard({
  // eslint-disable-next-line jsx-a11y/heading-has-content
  render = <section />,
  name,
  className,
  participants,
  starting_at_timestamp,
  league,
  scores,
  periods,
  venue,
  state,
  ...rest
}: FixtureCardProps) {
  const gameTime = new Date(starting_at_timestamp * 1000).toLocaleTimeString(
    [],
    { timeStyle: 'short' },
  );
  const gameDate = new Date(starting_at_timestamp * 1000).toLocaleDateString(
    [],
    { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' },
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
    <Card className={[styles._, className].join(' ')}>
      <HeadingLevel>
        <VisuallyHidden>
          <Heading>{name}</Heading>
        </VisuallyHidden>
        <div className={styles.Details}>
          {localTeam && <FixtureCardTeam {...localTeam} />}
          <div className={styles.Separator}>
            <div className={styles.Date}>
              {isActive ? (ticking ? ticking.minutes + "'" : 'HT') : gameDate}
            </div>
            <div className={styles.Score}>
              {isFuture
                ? gameTime
                : currentScores.get('home') + '-' + currentScores.get('away')}
            </div>
          </div>
          {visitorTeam && <FixtureCardTeam {...visitorTeam} />}
        </div>
        <footer className={styles.Metadata}>
          <div>
            <LeagueLogo
              leagueId={league.id}
              name={league.name}
              fallback={league.image_path}
            />
            {league.name}
          </div>
          <div>{shite(venue.name)}</div>
        </footer>
      </HeadingLevel>
    </Card>
  );
}
