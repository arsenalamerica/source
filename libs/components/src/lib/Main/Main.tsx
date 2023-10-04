'use client';

import styles from './Main.module.scss';
import { HeadingLevel } from '@ariakit/react';
import clsx from 'clsx';
import SWRProvider from './SWRProvider';

export interface MainProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'landing';
}

export default function Main({
  children,
  className,
  variant,
  ...rest
}: MainProps) {
  return (
    <HeadingLevel>
      <SWRProvider>
        <main
          {...rest}
          className={clsx(styles['_'], variant && styles[variant], className)}
        >
          {children}
        </main>
      </SWRProvider>
    </HeadingLevel>
  );
}
