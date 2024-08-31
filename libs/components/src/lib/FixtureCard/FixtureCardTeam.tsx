import styles from './FixtureCard.module.scss';

import { EntityBase } from '@arsenalamerica/sportmonks';
import { shite } from '@arsenalamerica/utils';

import { TeamLogo } from '../TeamLogo/TeamLogo';

interface FixtureCardTeamProps extends EntityBase {
  short_code: string;
  isLoading?: boolean;
}

export function FixtureCardTeam({
  id,
  name,
  image_path,
  short_code,
  isLoading,
}: FixtureCardTeamProps) {
  const properName = shite(name);

  const loadingClassname = isLoading ? 'loading' : '';

  return (
    <div className={styles.Team}>
      <TeamLogo
        isLoading={isLoading}
        className={[styles.TeamLogo, loadingClassname].join(' ')}
        teamId={id}
        name={name}
        fallback={image_path}
      />
      <div className={[styles.TeamName, loadingClassname].join(' ')}>
        {properName}
      </div>
      <div className={[styles.TeamAbbr, loadingClassname].join(' ')}>
        {short_code}
      </div>
    </div>
  );
}
