import styles from './GameCard.module.scss';

import { branchLogo } from '@arsenalamerica/data';
import { FixtureEntity } from '@arsenalamerica/sportmonks';

import { GameCardBilling } from './GameCardBilling';
import { GameCardTime } from './GameCardTime';
import { TeamLogo } from './TeamLogo';

export function GameCard({
  branch,
  participants,
  starting_at_timestamp,
}: { branch: { domain: string } } & FixtureEntity) {
  const Logo = branchLogo[branch.domain];

  console.log(participants);

  const localTeam = participants.find((team) => team.meta.location === 'home');
  const visitorTeam = participants.find(
    (team) => team.meta.location === 'away',
  );

  return (
    <div className={styles._}>
      {Logo && <Logo className={styles.Logo} />}
      {localTeam && visitorTeam && (
        <>
          <div className={styles.Badges}>
            <TeamLogo teamId={localTeam.id} name={localTeam.name} />
            <TeamLogo teamId={visitorTeam.id} name={visitorTeam.name} />
          </div>
          <GameCardBilling localTeam={localTeam} visitorTeam={visitorTeam} />
          <GameCardTime starting_at_timestamp={starting_at_timestamp} />
        </>
      )}
      <svg
        className={styles.Background}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path fill="#D91F26" d="M0 0h512v512H0z" />
        <linearGradient
          id="a"
          x1="0"
          x2="512"
          y1="256"
          y2="256"
          gradientTransform="rotate(180 256 256)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style={{ stopColor: '#a3171c', stopOpacity: 0 }} />
          <stop offset="1" style={{ stopColor: '#a3171c' }} />
        </linearGradient>
        <path fill="url(#a)" d="M0 0h512v512H0z" />
        <g fill="#A3171C" opacity=".5">
          <path d="M256.1 56.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM185.3 56.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM114.5 56.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM43.7 56.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.2-7.5 13.7-7.5 13.7s5.2 1.1 5.6.3c.1 0 1.9 4.4 2.1 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.3-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM326.9 56.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM397.7 56.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM468.5 56.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM291.5 110.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM220.7 110.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM149.9 110.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM79.1 110.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM362.3 110.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM433.1 110.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM256.1 163.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM185.3 163.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM114.5 163.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM43.7 163.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.3-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM326.9 163.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM397.7 163.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM468.5 163.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM291.5 216.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM220.7 216.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM149.9 216.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM79.1 216.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM362.3 216.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM433.1 216.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM256.1 270.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM185.3 270.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM114.5 270.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM43.7 270.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.3-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM326.9 270.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM397.7 270.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM468.5 270.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM291.5 323.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM220.7 323.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM149.9 323.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM79.1 323.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM362.3 323.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM433.1 323.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM256.1 376.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM185.3 376.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM114.5 376.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM43.7 376.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.3-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM326.9 376.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM397.7 376.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM468.5 376.9c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.3 2.7 2.7zM291.5 430.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM220.7 430.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM149.9 430.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM79.1 430.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.8 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM362.3 430.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM433.1 430.2c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 .1 1.9 4.4 2 5.9m6-22.8c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM256.1 483.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM185.3 483.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM114.5 483.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM43.7 483.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.8 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7-.1-1.5-1.3-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM326.9 483.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM397.7 483.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7zM468.5 483.6c.1-1.5 2-5.9 2-5.9.4.8 5.6-.3 5.6-.3s-7.4-5.6-7.4-13.7h-.4c-.1 8.1-7.4 13.7-7.4 13.7s5.2 1.1 5.6.3c0 0 1.9 4.3 2 5.9m6-22.9c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-12.2 0c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm8.8-2.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7z" />
        </g>
      </svg>
    </div>
  );
}
