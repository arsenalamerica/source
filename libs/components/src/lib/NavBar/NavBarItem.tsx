import React from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import * as Ariakit from '@ariakit/react';

type MergedLinkProps = LinkProps & Ariakit.ToolbarItemProps;

export interface NavBarItemProps extends MergedLinkProps {
  label?: string;
  icon?: React.ReactNode;
}

export function NavBarItem({
  label,
  icon,
  children,
  href,
  ...rest
}: NavBarItemProps) {
  const currentPathname = usePathname();
  const searchParams = useSearchParams();

  const preserveQueryParams = true;

  if (preserveQueryParams) {
    const query = searchParams.toString();
    href = { pathname: href as string, query };
  }

  const hrefPath = typeof href === 'object' ? href.pathname : href;

  const linkHref = preserveQueryParams
    ? { pathname: hrefPath, query: searchParams.toString() }
    : href;

  return (
    <Ariakit.ToolbarItem
      {...rest}
      autoFocus={currentPathname === hrefPath}
      render={<Link href={linkHref} />}
    >
      {children || (
        <>
          {icon && <i>{icon}</i>}
          {label}
        </>
      )}
    </Ariakit.ToolbarItem>
  );
}
