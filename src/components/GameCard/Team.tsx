import styles from './GameCard.module.scss';
import Image from 'next/image';
import TeamData from '@customTypes/TeamData';

export interface TeamProps {
  teamData: TeamData;
}

export const Team = ({ teamData }: TeamProps): JSX.Element => {
  const { name, logo_path }: TeamData['data'] = teamData.data;

  return (
    <div className={styles.Team}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo_path} alt={name} />

      <h2>{name}</h2>
    </div>
  );
};
