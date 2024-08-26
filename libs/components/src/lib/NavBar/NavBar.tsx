'use client';

import styles from './NavBar.module.scss';

import * as Ariakit from '@ariakit/react';

import { NavLink } from '../NavLink/NavLink';

import { NavBarItem } from './NavBarItem';

const home = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M24 2a2 2 0 0 0 -0.58 -1.43A2 2 0 0 0 22 0H2a2 2 0 0 0 -2 2v7.31A15.13 15.13 0 0 0 11.86 24a0.68 0.68 0 0 0 0.2 0 0.71 0.71 0 0 0 0.2 0A15.14 15.14 0 0 0 24 9.2Zm-5.18 7.62a0.52 0.52 0 0 1 0.15 0.56 0.5 0.5 0 0 1 -0.47 0.33h-1a0.5 0.5 0 0 0 -0.5 0.5v4.5a0.5 0.5 0 0 1 -0.5 0.5H14a0.5 0.5 0 0 1 -0.5 -0.5v-2.25a1.5 1.5 0 1 0 -3 0v2.25a0.5 0.5 0 0 1 -0.5 0.5H7.5a0.5 0.5 0 0 1 -0.5 -0.5V11a0.5 0.5 0 0 0 -0.5 -0.5h-1a0.5 0.5 0 0 1 -0.5 -0.32 0.52 0.52 0 0 1 0.15 -0.56l6.5 -5.5a0.51 0.51 0 0 1 0.64 0Z"
      strokeWidth="1"
    />
  </svg>
);

const trophy = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <g>
      <path
        d="M22 3h-1.76l0.2 -1.35a1.54 1.54 0 0 0 -0.38 -1.16A1.51 1.51 0 0 0 19 0H5.05a1.51 1.51 0 0 0 -1.11 0.49 1.55 1.55 0 0 0 -0.37 1.21L3.76 3H2a2 2 0 0 0 -2 2v3a5 5 0 0 0 2.52 4.34 1 1 0 1 0 1 -1.73A3 3 0 0 1 2 8V5h2.06l0.63 4.21c0.18 1.16 1.66 6.29 7.31 6.29s7.13 -5.13 7.31 -6.29L19.94 5H22v3a3 3 0 0 1 -1.51 2.61 1 1 0 0 0 1 1.73A5 5 0 0 0 24 8V5a2 2 0 0 0 -2 -2Zm-6.92 7.27a0.53 0.53 0 0 1 -0.75 0.66l-2.2 -1.24a0.25 0.25 0 0 0 -0.24 0l-2.21 1.24a0.52 0.52 0 0 1 -0.74 -0.66l0.89 -2a0.27 0.27 0 0 0 -0.05 -0.28L8.16 6.36a0.49 0.49 0 0 1 0.35 -0.86h1.84a0.25 0.25 0 0 0 0.23 -0.14l1 -2.07a0.53 0.53 0 0 1 0.94 0l1 2.07a0.24 0.24 0 0 0 0.23 0.14h1.84a0.49 0.49 0 0 1 0.34 0.86l-1.69 1.58a0.25 0.25 0 0 0 -0.06 0.28Z"
        strokeWidth="1"
      />
      <path
        d="M10.78 16.91a0.22 0.22 0 0 0 -0.19 0.06 0.25 0.25 0 0 0 -0.09 0.19v2.43C7.14 20 5 21.78 5 23a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1c0 -1.22 -2.14 -3 -5.5 -3.41v-2.43a0.25 0.25 0 0 0 -0.09 -0.19 0.22 0.22 0 0 0 -0.19 -0.06 8.31 8.31 0 0 1 -2.44 0Z"
        strokeWidth="1"
      />
    </g>
  </svg>
);

const calendar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <g>
      <path
        d="M21.5 3h-2.75a0.25 0.25 0 0 1 -0.25 -0.25V1a1 1 0 0 0 -2 0v4.75a0.75 0.75 0 0 1 -1.5 0V3.5a0.5 0.5 0 0 0 -0.5 -0.5H8.25A0.25 0.25 0 0 1 8 2.75V1a1 1 0 0 0 -2 0v4.75a0.75 0.75 0 0 1 -1.5 0V3.5A0.5 0.5 0 0 0 4 3H2.5a2 2 0 0 0 -2 2v17a2 2 0 0 0 2 2h19a2 2 0 0 0 2 -2V5a2 2 0 0 0 -2 -2Zm0 18.5a0.5 0.5 0 0 1 -0.5 0.5H3a0.5 0.5 0 0 1 -0.5 -0.5v-12A0.5 0.5 0 0 1 3 9h18a0.5 0.5 0 0 1 0.5 0.5Z"
        strokeWidth="1"
      />
      <path
        d="M16 13.58h-2l-1.09 -2.51a1 1 0 0 0 -0.91 -0.57 1 1 0 0 0 -0.9 0.57L10 13.58H8a0.94 0.94 0 0 0 -0.9 0.58 1 1 0 0 0 0.25 1.08l1.79 1.59 -1 2.29a1 1 0 0 0 0.24 1.12 1 1 0 0 0 0.62 0.26 1 1 0 0 0 0.49 -0.13L12 19l2.49 1.4a1 1 0 0 0 1.15 -0.13 1 1 0 0 0 0.25 -1.11l-1 -2.3 1.81 -1.61a1 1 0 0 0 0.23 -1.06 1 1 0 0 0 -0.93 -0.61Z"
        strokeWidth="1"
      />
    </g>
  </svg>
);

export function NavBar() {
  const ACTIVE_CLASS = 'is-dark';

  const ITEMS = [
    {
      label: 'Home',
      icon: home,
      render: (
        <NavLink preserveQueryParams activeClassName={ACTIVE_CLASS} href="/" />
      ),
    },
    {
      label: 'Table',
      icon: trophy,
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
      icon: calendar,
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
      <Ariakit.Toolbar className={styles.toolbar}>
        {ITEMS.map((item, index) => (
          <NavBarItem key={index} {...item} />
        ))}
      </Ariakit.Toolbar>
    </nav>
  );
}

export default NavBar;
