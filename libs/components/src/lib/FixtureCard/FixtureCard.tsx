import styles from './FixtureCard.module.scss';

import Image from 'next/image';

import { FixtureEntity } from '@arsenalamerica/sportmonks';
import { shite } from '@arsenalamerica/utils';

import { FixtureCardTeam } from './FixtureCardTeam';

export function FixtureCard({
  name,
  participants,
  starting_at_timestamp,
  league,
  scores,
  venue,
}: FixtureEntity) {
  const gameTime = new Date(starting_at_timestamp * 1000).toLocaleTimeString(
    [],
    { timeStyle: 'short' },
  );
  const gameDate = new Date(starting_at_timestamp * 1000).toLocaleDateString(
    [],
    { dateStyle: 'medium' },
  );

  return (
    <article className={styles._}>
      <h2 className="screen-reader-only">{name}</h2>
      <section className={styles.Details}>
        <FixtureCardTeam {...participants[0]} />
        <div className={styles.Separator}>
          <div className={styles.Date}>{gameDate + ' @ ' + gameTime}</div>
          <div className={styles.Score}>
            {scores[1]?.score.goals}-{scores[3]?.score.goals}
          </div>
          <div className={styles.Elapsed}>65'</div>
        </div>
        <FixtureCardTeam {...participants[1]} />
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
    </article>
  );
}
