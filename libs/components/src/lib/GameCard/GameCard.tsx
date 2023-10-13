'use client';

import styles from './GameCard.module.scss';
import { useContext } from 'react';
import { BranchContext } from '../BranchContext/BranchContext';
import useSWR from 'swr';
import { shite, dateFromEpoch, timeFromEpoch } from '@arsenalamerica/utils';
import { Textfit } from 'react-textfit';

export function GameCard() {
  const { Logo } = useContext(BranchContext);
  const { data, error, isLoading } = useSWR('fixtures');

  // console.log({ isLoading }, { error }, { data });

  if (error) {
    console.error(error);
    return <div className={styles._}>An error has occurred.</div>;
  }
  if (isLoading) return <div className={styles._}>Loading...</div>;
  if (!data.data) {
    return <div>No Data</div>;
  }

  // Get the next game
  // TODO: Make this a query parameter on the API or a separate route
  const upcoming = data.data.find(
    ({ state_id }: { state_id: number }) => state_id === 1,
  );

  const { starting_at_timestamp } = upcoming;

  const localTeam = upcoming.participants.find(
    ({ meta }: { meta: { location: string } }) => meta.location === 'home',
  );
  const visitorTeam = upcoming.participants.find(
    ({ meta }: { meta: { location: string } }) => meta.location === 'away',
  );

  console.log(visitorTeam);

  const fixtureDate = dateFromEpoch(starting_at_timestamp);
  const fixtureTime = timeFromEpoch(starting_at_timestamp);

  return (
    <div className={styles._}>
      {Logo && <Logo className={styles.Logo} />}

      <div className={styles.Badges}>
        <img src={localTeam.image_path} alt={localTeam.name} />
        <img src={visitorTeam.image_path} alt={localTeam.name} />
      </div>
      <div className={styles.MainBilling}>
        <Textfit mode="single" max={500}>
          <h2>
            {shite(localTeam.name)}
            <span>{localTeam.id !== 19 && ' vs'}</span>
          </h2>
        </Textfit>
        <Textfit mode="single" max={500}>
          <h2>
            <span>{visitorTeam.id !== 19 && 'vs '}</span>
            {shite(visitorTeam.name)}
          </h2>
        </Textfit>
      </div>
      <div className={styles.GameTime}>
        <Textfit mode="single">
          <h2>{fixtureDate}</h2>
        </Textfit>
        <Textfit mode="single">
          <h2>{fixtureTime} @ Doyle&apos;s</h2>
        </Textfit>
      </div>
      <svg
        className={styles.Background}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 353.9 512"
        height="100vw"
      >
        <path
          fill="#da1f26"
          d="m338.6 436.3 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 1.5-8.8H0v512h340.3l13.6-79.9-15.3 4.2z"
        />
        <path
          fill="#c4212b"
          d="m118.3 447.7 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2L133.5 16l-15.2 4.2L121.7 0h-4l-4.4 25.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-10.7 63h4.1l11.6-68.5-15.2 4.2zm44.5 26.5 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 8-46.7h-4.1l-8.9 52.2 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-6.2 36.5h4l7.2-42-15.3 4.2zm89.2-20.3 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2L256.5 0h-4.1L247 31.9l15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-9.6 56.8h4l10.6-62.3-15.2 4.2zM73.7 494.5 89 404.8 73.7 409 89 319.3l-15.3 4.2L89 233.8 73.7 238 89 148.3l-15.3 4.2L89 62.8 73.7 67 85.1 0H81L68.7 72.5 84 68.3 68.7 158l15.3-4.2-15.3 89.7 15.3-4.2L68.7 329l15.3-4.2-15.3 89.7 15.3-4.2L68.7 500l15.3-4.2-2.8 16.2h4.1l3.7-21.7-15.3 4.2zM29.1 468l15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2L36 0h-4l-7.9 46 15.3-4.1-15.3 89.6 15.3-4.1L24.1 217l15.3-4.2-15.3 89.7 15.3-4.1L24.1 388l15.3-4.1-15.3 89.6 15.3-4.2-7.3 42.7h4.1l8.2-48.2-15.3 4.2zm278.7 44 4-23.6-15.2 4.1 15.2-89.6-15.2 4.1 15.2-89.6-15.2 4.1 15.2-89.6-15.2 4.2 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.1 11-65h-4l-12 70.6 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-3.1 18.1h4.1zm-97.2 0h11.5l.6-3.3-12.1 3.3zm-3 0 15.1-88.8-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2L221.9 0h-18.6l-.9 5.4 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-14.2 83.3h4.1z"
        />
      </svg>
    </div>
  );
}
