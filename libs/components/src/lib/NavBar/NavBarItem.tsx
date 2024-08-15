import React from 'react';
import clsx from 'clsx';

import * as Ariakit from '@ariakit/react';

export interface NavBarItemProps extends Ariakit.ToolbarItemProps {
  label?: string;
  icon?: React.ReactNode;
}

export function NavBarItem({
  className,
  label,
  icon,
  children,
  ...rest
}: NavBarItemProps) {
  return (
    <Ariakit.ToolbarItem
      className={clsx(className, 'button is-link')}
      {...rest}
    >
      {children || (
        <>
          {icon && <span className="icon">{icon}</span>}
          {label && <span>{label}</span>}
        </>
      )}
    </Ariakit.ToolbarItem>
  );
}
