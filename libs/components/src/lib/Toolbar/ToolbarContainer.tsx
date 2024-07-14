import * as Ariakit from '@ariakit/react';
import clsx from 'clsx';
import styles from './Toolbar.module.scss';

export type ToolbarContainerProps = Ariakit.ToolbarProps;

export function ToolbarContainer({ className, ...rest }: Ariakit.ToolbarProps) {
  return (
    <Ariakit.Toolbar className={clsx(styles.Toolbar, className)} {...rest} />
  );
}
