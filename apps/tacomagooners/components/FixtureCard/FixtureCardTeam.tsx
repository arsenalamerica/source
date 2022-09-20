import Image from 'next/image';
import styles from './FixtureCard.module.scss';

const FixtureCardTeam = ({ team }): JSX.Element => (
  <div className={styles.Team}>
    <Image src={team.logo_path} alt={team.name} width={60} height={60} />
    {team.name}
  </div>
);

export default FixtureCardTeam;
