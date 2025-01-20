'use client';
import styles from './SocialLinks.module.scss';

import React from 'react';
import clsx from 'clsx';
import { trackEvent } from 'fathom-client';
import * as icons from 'simple-icons';

import ExternalLink from '../ExternalLink/ExternalLink';

export interface SocialLinksProperties
  extends React.HTMLAttributes<HTMLUListElement> {
  links: {
    name: string;
    url?: string;
  }[];
}

const getBrandIcon = (name: string) => {
  const icon =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Implicit any
    icons[
      'si' +
        name.charAt(0).toUpperCase() +
        name.slice(1).replace(' ', '').toLowerCase()
    ];
  return icon;
};

const handleClick = () => {
  trackEvent('social');
};

export function SocialLinks({
  className,
  links,
  ...rest
}: SocialLinksProperties) {
  return (
    links && (
      <ul {...rest} className={clsx(styles['_'], className)}>
        {links.map(({ name, url }) => {
          const icon = getBrandIcon(name);
          // console.log(getBrandIcon(name));

          return (
            <li key={name}>
              {icon ? (
                <ExternalLink onClick={handleClick} href={url}>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>{name}</title>
                    <path d={icon.path} />
                  </svg>
                </ExternalLink>
              ) : (
                <p>NO ICON FOUND FOR {name}</p>
              )}
            </li>
          );
        })}
      </ul>
    )
  );
}
