import styles from './FixtureCard.module.scss';
import { HeadingLevel } from 'ariakit';
import FixtureCardTeam from './FixtureCardTeam';
import FixtureCardWeather from './FixtureCardWeather';
import { Placeholder } from '@bjeco/blocks';

const FixtureCard = ({
  id,
  localTeam,
  scores,
  visitorTeam,
  weather_report,
  ...rest
}): JSX.Element => {
  const isStarted = rest.time.status !== 'NS';

  return (
    <HeadingLevel>
      <section className={styles._}>
        {isStarted && (
          <div className={styles.Score}>{scores.localteam_score}</div>
        )}
        <FixtureCardTeam team={localTeam.data} />
        <div>vs</div>
        <FixtureCardTeam team={visitorTeam.data} />
        {isStarted && (
          <div className={styles.Score}>{scores.visitorteam_score}</div>
        )}
        {weather_report && <FixtureCardWeather {...weather_report} />}
      </section>
      {/* <Placeholder data={rest} /> */}
    </HeadingLevel>
  );
};

export default FixtureCard;
