import styles from './NextGame.module.scss';

import { Heading } from '@ariakit/react';

import { Card } from '../Card/Card';

export function NextGameLoading() {
  return (
    <>
      <Heading>Match Watch Party</Heading>
      <Card render={<div />} className={styles._}>
        <p className="loading">Loading...</p>
        <address className="loading">
          <span className="loading">
            Loading...
            <br />
            Loading...
          </span>
        </address>
      </Card>
    </>
  );
}
