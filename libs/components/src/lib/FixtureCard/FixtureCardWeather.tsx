import Image from 'next/image';
import styles from './FixtureCard.module.scss';

export interface FixtureCardWeatherProps {
  code: string;
  icon: string;
  temperature: {
    temp: number;
    unit: string;
  };
}

const FixtureCardWeather = ({
  code,
  icon,
  temperature,
}: FixtureCardWeatherProps): JSX.Element => (
  <div className={styles.Weather}>
    <Image src={icon} alt={code} width={40} height={40} />
    {temperature?.temp} &deg;F
  </div>
);

export default FixtureCardWeather;
