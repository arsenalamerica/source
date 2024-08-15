import styles from './FixtureCard.module.scss';

import Image from 'next/image';

import { Entity } from './types';

export function FixtureCardTeam({ name, image }: Entity) {
  return (
    <div className={styles.Team}>
      <Image
        className={styles.TeamLogo}
        src={image}
        alt={name + ' Logo'}
        width={50}
        height={50}
      />
      <div className={styles.TeamName}>{name}</div>
    </div>
  );
}
