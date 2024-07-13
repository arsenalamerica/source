import * as Ariakit from '@ariakit/react';
import clsx from 'clsx';
import styles from './Toolbar.module.scss';

export interface ToolbarItemProps extends Ariakit.ToolbarItemProps {
  label?: string;
}

export function ToolbarItem({
  className,
  label,
  children,
  ...rest
}: ToolbarItemProps) {
  return (
    <Ariakit.ToolbarItem className={clsx(className, 'button')} {...rest}>
      {children || label}
    </Ariakit.ToolbarItem>
  );
}
