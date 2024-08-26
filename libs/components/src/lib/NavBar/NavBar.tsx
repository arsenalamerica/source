'use client';

import styles from './NavBar.module.scss';

import * as Ariakit from '@ariakit/react';

import { NavLink } from '../NavLink/NavLink';

// import { calendar, home, trophy } from './icons';
import { NavBarItem } from './NavBarItem';

export function NavBar() {
  const ACTIVE_CLASS = 'is-dark';

  const ITEMS = [
    {
      label: 'Home',
      // icon: home,
      render: (
        <NavLink preserveQueryParams activeClassName={ACTIVE_CLASS} href="/" />
      ),
    },
    {
      label: 'Table',
      // icon: trophy,
      render: (
        <NavLink
          preserveQueryParams
          activeClassName={ACTIVE_CLASS}
          href="/table"
        />
      ),
    },
    {
      label: 'Fixtures',
      // icon: calendar,
      render: (
        <NavLink
          preserveQueryParams
          activeClassName={ACTIVE_CLASS}
          href="/fixtures"
        />
      ),
    },
  ];

  return (
    <nav className={styles._}>
      <Ariakit.Toolbar className={styles.Toolbar}>
        {ITEMS.map((item, index) => (
          <NavBarItem key={index} {...item} />
        ))}
      </Ariakit.Toolbar>
    </nav>
  );
}

export default NavBar;
