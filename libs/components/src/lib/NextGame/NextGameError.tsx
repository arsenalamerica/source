'use client';

import styles from './NextGame.module.scss';

export function NextGameError() {
  return (
    <div className={styles._}>
      <h2>Error</h2>
      <h3>An error has occurred</h3>
    </div>
  );
}

export default NextGameError;
