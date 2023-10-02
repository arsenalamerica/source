'use client';

import styles from './FixtureCard.module.scss';
import { HeadingLevel } from '@ariakit/react';
import FixtureCardTeam from './FixtureCardTeam';
import FixtureCardWeather from './FixtureCardWeather';

/* eslint-disable-next-line */
export interface FixtureCardProps {
  id: string;
  localTeam?: {
    data: {
      name: string;
      logo_path: string;
    };
  };
  scores?: {
    localteam_score: number;
    visitorteam_score: number;
  };
  visitorTeam?: {
    data: {
      name: string;
      logo_path: string;
    };
  };
  time?: {
    status: string;
  };
  weather_report?: {
    code: string;
    type: string;
    icon: string;
    temperature: {
      temp: number;
      unit: string;
    };
    wind: {
      speed: number;
      unit: string;
      direction: string;
    };
    humidity: number;
    cloudcover: number;
    pressure: {
      value: number;
      unit: string;
    };
  };
}

const FixtureCard = ({
  id,
  localTeam,
  scores,
  visitorTeam,
  weather_report,
  ...rest
}: FixtureCardProps): JSX.Element => {
  const isStarted = rest?.time?.status !== 'NS';

  return (
    <HeadingLevel>
      <section className={styles._}>
        {isStarted && (
          <div className={styles.Score}>{scores?.localteam_score}</div>
        )}
        <FixtureCardTeam team={localTeam?.data} />
        <div>vs</div>
        <FixtureCardTeam team={visitorTeam?.data} />
        {isStarted && (
          <div className={styles.Score}>{scores?.visitorteam_score}</div>
        )}
        {weather_report && <FixtureCardWeather {...weather_report} />}
      </section>
      {/* <Placeholder data={rest} /> */}
    </HeadingLevel>
  );
};

export default FixtureCard;
