import styles from './Card.module.scss';

import clsx from 'clsx';

import { Role, RoleProps } from '@ariakit/react';

export function Card({ className, children, ...rest }: RoleProps) {
  return (
    <Role {...rest} className={clsx(styles['_'], className)}>
      {children}
    </Role>
  );
}
