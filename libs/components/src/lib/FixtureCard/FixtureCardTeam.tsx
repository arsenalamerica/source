import Image from 'next/image';
import styles from './FixtureCard.module.scss';

export interface FixtureCardTeamProps {
  team?: {
    logo_path: string;
    name: string;
  };
}

const FixtureCardTeam = ({ team }: FixtureCardTeamProps): JSX.Element => (
  <div className={styles.Team}>
    {team && (
      <Image src={team.logo_path} alt={team.name} width={60} height={60} />
    )}
    {team?.name}
  </div>
);

export default FixtureCardTeam;
