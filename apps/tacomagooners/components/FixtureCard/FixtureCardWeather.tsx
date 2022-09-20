import Image from 'next/image';
import styles from './FixtureCard.module.scss';

const FixtureCardWeather = ({ code, icon, temperature }): JSX.Element => (
  <div className={styles.Weather}>
    <Image src={icon} alt={code} width={40} height={40} />
    {temperature?.temp} &deg;F
  </div>
);

export default FixtureCardWeather;
