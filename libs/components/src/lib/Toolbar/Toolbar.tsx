import styles from './Toolbar.module.scss';
import clsx from 'clsx';
import React from 'react';
import { ToolbarItem, ToolbarItemProps } from './ToolbarItem';
import { ToolbarContainer, ToolbarContainerProps } from './ToolbarContainer';

export interface ToolbarProps extends ToolbarContainerProps {
  items: ToolbarItemProps[];
}

export function Toolbar({ className, items, ...rest }: ToolbarProps) {
  return (
    <ToolbarContainer {...rest} className={clsx(styles.Toolbar, className, {})}>
      {items.map((item, index) => (
        <ToolbarItem key={index} {...item} />
      ))}
    </ToolbarContainer>
  );
}
