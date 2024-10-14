import styles from './Card.module.scss';

import { forwardRef } from 'react';
import clsx from 'clsx';

import { Role, RoleProps } from '@ariakit/react';

export type CardProps = RoleProps;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ render = <section />, className, children, ...rest }, ref) => {
    return (
      <Role
        {...rest}
        ref={ref}
        render={render}
        className={clsx(styles['_'], className)}
      >
        {children}
      </Role>
    );
  },
);

// export function Card({
//   render = <section />,
//   className,
//   children,
//   ...rest
// }: CardProps) {
//   return (
//     <Role {...rest} render={render} className={clsx(styles['_'], className)}>
//       {children}
//     </Role>
//   );
// }
