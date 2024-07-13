'use client';

import * as Ariakit from '@ariakit/react';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import styles from './NavBar.module.scss';
import { NavBarItem } from './NavBarItem';
import { NavLink } from '../NavLink/NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faHome } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  const searchParams = useSearchParams();

  const ACTIVE_CLASS = 'is-dark';

  const ITEMS = [
    {
      label: 'Home',
      icon: <FontAwesomeIcon icon={faHome} />,
      render: (
        <NavLink preserveQueryParams activeClassName={ACTIVE_CLASS} href="/" />
      ),
    },
    {
      label: 'Table',
      icon: <FontAwesomeIcon icon={faTrophy} />,
      render: (
        <NavLink
          preserveQueryParams
          activeClassName={ACTIVE_CLASS}
          href="/table"
        />
      ),
    },
  ];

  return (
    <nav className={styles._}>
      <Ariakit.Toolbar className={styles.toolbar}>
        {ITEMS.map((item, index) => (
          <NavBarItem key={index} {...item} />
        ))}
      </Ariakit.Toolbar>
    </nav>
  );
}

export default NavBar;
