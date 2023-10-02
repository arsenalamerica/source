'use client';

import styles from './Main.module.scss';
import { HeadingLevel } from '@ariakit/react';

export interface MainProps {
  children?: React.ReactNode;
}

export default function Main({ children, ...rest }: MainProps) {
  return (
    <HeadingLevel>
      <main {...rest} className={styles._}>
        {children}
      </main>
    </HeadingLevel>
  );
}
