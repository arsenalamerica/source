import styles from './GameCard.module.scss';
import { TeamData } from '@arsenalamerica/types';

export interface TeamProps {
  teamData: TeamData;
}

export const Team = ({ teamData }: TeamProps): JSX.Element => {
  const { name, logo_path }: TeamData['data'] = teamData.data;

  return (
    <div className={styles.Team}>
      <img src={logo_path} alt={name} />

      <h2>{name}</h2>
    </div>
  );
};
