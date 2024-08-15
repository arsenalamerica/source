import styles from './Toolbar.module.scss';

import clsx from 'clsx';

import * as Ariakit from '@ariakit/react';

export type ToolbarContainerProps = Ariakit.ToolbarProps;

export function ToolbarContainer({ className, ...rest }: Ariakit.ToolbarProps) {
  return (
    <Ariakit.Toolbar className={clsx(styles.Toolbar, className)} {...rest} />
  );
}
