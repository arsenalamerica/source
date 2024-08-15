'use client';

import styles from './NavBar.module.scss';

import * as Ariakit from '@ariakit/react';
import { faHome, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from '../NavLink/NavLink';

import { NavBarItem } from './NavBarItem';

/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
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
    // {
    //   label: 'Fixtures',
    //   render: (
    //     <NavLink
    //       preserveQueryParams
    //       activeClassName={ACTIVE_CLASS}
    //       href="/fixtures"
    //     />
    //   ),
    // },
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
