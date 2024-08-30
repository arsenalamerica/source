import styles from './Card.module.scss';

import clsx from 'clsx';

import { Role, RoleProps } from '@ariakit/react';

export type CardProps = RoleProps;

export function Card({
  render = <section />,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <Role {...rest} render={render} className={clsx(styles['_'], className)}>
      {children}
    </Role>
  );
}
