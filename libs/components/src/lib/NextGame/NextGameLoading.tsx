'use client';

import { useContext } from 'react';
import { BranchContext } from '../BranchContext/BranchContext';
import styles from './NextGame.module.scss';

export function NextGameError() {
  const branch = useContext(BranchContext);

  return (
    <div className={styles._}>
      <h2 className="loading">Next Match Viewing</h2>
      <h3 className="loading">Loading...</h3>
      <p className="loading">Loading...</p>
      {branch.pub && (
        <address className="loading">
          <a href={branch.pub.website}>
            {branch.pub.name}
            <br />
            {branch.pub.address.replace(',', '\n')}
          </a>
        </address>
      )}
    </div>
  );
}

export default NextGameError;
