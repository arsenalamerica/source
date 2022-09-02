import styles from './GameCard.module.scss';
import TeamData from '@customTypes/TeamData';
import Time from '@customTypes/Time';
import VenueData from '@customTypes/VenueData';
import { Team } from './Team';

export interface GameCardProps {
  localTeam: TeamData;
  time: Time;
  venue: VenueData;
  visitorTeam: TeamData;
}

export const GameCard = ({
  localTeam,
  time,
  venue,
  visitorTeam,
}: GameCardProps): JSX.Element => {
  const { name: venueName, image_path } = venue.data;
  // Timestamp is unix, so we need to multiply by 1000
  const gameTime = new Date(time.starting_at.timestamp * 1000);

  return (
    <div className={styles._}>
      <p>{venueName}</p>
      <p>{gameTime.toLocaleTimeString(undefined, { timeStyle: 'short' })}</p>
      <p>{gameTime.toLocaleDateString(undefined, { dateStyle: 'medium' })}</p>
      <Team teamData={localTeam}></Team>
      <Team teamData={visitorTeam}></Team>
    </div>
  );
};
