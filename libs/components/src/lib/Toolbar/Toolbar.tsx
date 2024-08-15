import styles from './Toolbar.module.scss';

import React from 'react';
import clsx from 'clsx';

import { ToolbarContainer, ToolbarContainerProps } from './ToolbarContainer';
import { ToolbarItem, ToolbarItemProps } from './ToolbarItem';

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
