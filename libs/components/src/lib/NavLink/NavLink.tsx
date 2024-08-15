'use client';

import { forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface NavLinkProps extends LinkProps {
  activeClassName?: string;
  preserveQueryParams?: boolean;
  className?: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function NavLink(
    { className, activeClassName, preserveQueryParams, href, ...rest },
    forwardedRef,
  ) {
    const currentPathname = usePathname();
    const searchParams = useSearchParams();

    if (preserveQueryParams) {
      const query = searchParams.toString();
      href = { pathname: href as string, query };
    }

    const hrefPath = typeof href === 'object' ? href.pathname : href;

    const linkHref = preserveQueryParams
      ? { pathname: hrefPath, query: searchParams.toString() }
      : href;
    return (
      <Link
        {...rest}
        ref={forwardedRef}
        className={[
          className,
          currentPathname === hrefPath ? activeClassName : '',
        ].join(' ')}
        href={linkHref}
      />
    );
  },
);
