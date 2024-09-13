'use client';

import styles from './NavBar.module.scss';

import * as Ariakit from '@ariakit/react';

import { calendar, home, trophy } from './icons';
import { NavBarItem } from './NavBarItem';

export function NavBar() {
  const ITEMS = [
    {
      'data-home': true,
      label: 'Home',
      icon: home,
      href: '/',
    },
    {
      label: 'Table',
      icon: trophy,
      href: '/table',
    },
    {
      label: 'Fixtures',
      icon: calendar,
      href: '/fixtures',
    },
  ];

  return (
    <Ariakit.Toolbar render={<nav />} className={styles._}>
      {ITEMS.map((item, index) => (
        <NavBarItem key={index} {...item} />
      ))}
    </Ariakit.Toolbar>
  );
}

export default NavBar;
