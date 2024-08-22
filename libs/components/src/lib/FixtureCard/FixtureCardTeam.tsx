import styles from './FixtureCard.module.scss';

import Image from 'next/image';

import { shite } from '@arsenalamerica/utils';

import { Entity } from './types';

export function FixtureCardTeam({ name, image_path }: Entity) {
  const properName = shite(name);
  return (
    <div className={styles.Team}>
      <Image
        className={styles.TeamLogo}
        src={image_path}
        alt={properName + ' Logo'}
        width={50}
        height={50}
      />
      <div className={styles.TeamName}>{properName}</div>
    </div>
  );
}
