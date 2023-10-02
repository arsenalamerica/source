'use client';

import styles from './Main.module.scss';
import { HeadingLevel } from '@ariakit/react';

const Main = ({ children, ...rest }): JSX.Element => (
  <HeadingLevel>
    <main {...rest} className={styles._}>
      {children}
    </main>
  </HeadingLevel>
);

export default Main;
