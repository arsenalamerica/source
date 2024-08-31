import styles from './Main.module.scss';

import clsx from 'clsx';

export interface MainProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'landing';
}

export function Main({ children, className, variant, ...rest }: MainProps) {
  return (
    <main
      {...rest}
      className={clsx(styles['_'], variant && styles[variant], className)}
    >
      {children}
    </main>
  );
}
