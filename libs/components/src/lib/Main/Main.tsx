import styles from './Main.module.scss';

import clsx from 'clsx';

export interface MainProps {
  children?: React.ReactNode;
  className?: string;
}

export function Main({ children, className, ...rest }: MainProps) {
  return (
    <main {...rest} className={clsx(styles['_'], className)}>
      {children}
    </main>
  );
}
