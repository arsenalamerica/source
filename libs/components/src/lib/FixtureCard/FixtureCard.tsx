'use client'; // Needed because we are dealing with dates relative to the user. We can move this to the game info section later on to encapsulate the date

import styles from './FixtureCard.module.scss';

import { useEffect, useRef } from 'react';

import { Heading, HeadingLevel, VisuallyHidden } from '@ariakit/react';
import {
  FixtureEntity,
  REGULAR_TIME_ACTIVE_STATES,
} from '@arsenalamerica/sportmonks';
import { shite } from '@arsenalamerica/utils';

import { Card, CardProps } from '../Card/Card';
import { ClientOnly } from '../ClientOnly/ClientOnly';
import { LeagueLogo } from '../LeagueLogo/LeagueLogo';

import { FixtureCardTeam } from './FixtureCardTeam';

type FixtureCardProps = Omit<CardProps, 'id'> &
  Omit<FixtureEntity, 'id'> & { id: number | string | undefined };

export function FixtureCard({
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
  id,
  ...rest
}: FixtureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      console.log(id);
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [id]);

  const gameTime = new Date(starting_at_timestamp * 1000).toLocaleTimeString(
    [],
    { timeStyle: 'short' },
  );
  const gameDate = new Date(starting_at_timestamp * 1000).toLocaleDateString(
    [],
    { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' },
  );

  if (!participants) {
    return (
      <Card className={[styles._, className].join(' ')} ref={cardRef}>
        <HeadingLevel>
          <VisuallyHidden>
            <Heading>{name}</Heading>
          </VisuallyHidden>
          <div className={styles.Details}>No upcoming fixtures...</div>
        </HeadingLevel>
      </Card>
    );
  }

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
    <Card className={[styles._, className].join(' ')} ref={cardRef}>
      <HeadingLevel>
        <VisuallyHidden>
          <Heading>{name}</Heading>
        </VisuallyHidden>
        <div className={styles.Details}>
          {localTeam && <FixtureCardTeam {...localTeam} />}
          <div className={styles.Separator}>
            <div className={styles.Date}>
              <ClientOnly>
                {isActive ? (ticking ? ticking.minutes + "'" : 'HT') : gameDate}
              </ClientOnly>
            </div>
            <div className={styles.Score}>
              <ClientOnly>
                {isFuture
                  ? gameTime
                  : currentScores.get('home') + '-' + currentScores.get('away')}
              </ClientOnly>
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
            <span>{league.name}</span>
          </div>
          <div>{shite(venue?.name)}</div>
        </footer>
      </HeadingLevel>
    </Card>
  );
}

export function FixtureCardLoading() {
  return (
    <Card className={styles._}>
      <HeadingLevel>
        <VisuallyHidden>
          <Heading>Loading...</Heading>
        </VisuallyHidden>
        <div className={styles.Details}>
          <FixtureCardTeam
            isLoading
            id={19}
            name='Loading'
            short_code='XXX'
            image_path='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
          />
          <div className={styles.Separator}>
            <div className={styles.Date} />
            <div className={styles.Score} />
          </div>
          <FixtureCardTeam
            isLoading
            id={19}
            name='Loading'
            short_code='XXX'
            image_path='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
          />
        </div>
        <footer className={styles.Metadata}>
          <div>
            <LeagueLogo
              className='loading'
              leagueId={2}
              name='Loading...'
              fallback='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
            />
          </div>
          <div />
        </footer>
      </HeadingLevel>
    </Card>
  );
}
