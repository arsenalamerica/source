'use client';

import styles from './LeagueTable.module.scss';

export function LeagueTableError() {
  return (
    <div className={styles._}>
      <h2>Error</h2>
      <h3>An error has occurred</h3>
    </div>
  );
}

export default LeagueTableError;
