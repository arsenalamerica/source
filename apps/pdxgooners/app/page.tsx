import styles from './page.module.scss';
import data from '../data.json';

export default async function Index() {
  return (
    <div className={styles.page}>
      <h1>{data.name}</h1>
    </div>
  );
}
