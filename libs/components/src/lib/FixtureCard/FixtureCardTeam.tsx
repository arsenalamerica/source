import styles from './FixtureCard.module.scss';

import { EntityBase } from '@arsenalamerica/sportmonks';
import { shite } from '@arsenalamerica/utils';

import { TeamLogo } from '../TeamLogo';

interface FixtureCardTeamProps extends EntityBase {
  short_code: string;
}

export function FixtureCardTeam({
  id,
  name,
  image_path,
  short_code,
}: FixtureCardTeamProps) {
  const properName = shite(name);
  return (
    <div className={styles.Team}>
      <TeamLogo
        className={styles.TeamLogo}
        teamId={id}
        name={name}
        fallback={image_path}
      />
      <div className={styles.TeamName}>{properName}</div>
      <div className={styles.TeamAbbr}>{short_code}</div>
    </div>
  );
}
