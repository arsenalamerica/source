import './global.scss';

import type { Metadata } from 'next';

import { Heading, HeadingLevel, VisuallyHidden } from '@ariakit/react';
import {
  FathomNext,
  NavBar,
  PWAInstallPrompt,
  SocialLinks,
} from '@arsenalamerica/components';
import { branchData } from '@arsenalamerica/data';

export interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ domain: string }>;
}

export async function generateMetadata(props: LayoutProps): Promise<Metadata> {
  const params = await props.params;
  const branch = branchData[params.domain];

  return {
    title: branch?.name,
    description: `Welcome to ${branch?.name}!`,
  };
}

export default async function Layout(props: LayoutProps) {
  const params = await props.params;

  const { children } = props;

  const branch = branchData[params.domain];

  return (
    <HeadingLevel>
      <PWAInstallPrompt />

      {branch && (
        <>
          <FathomNext fathomId="RFIYDIHQ" />
          <VisuallyHidden>
            <Heading>{branch.name}</Heading>
          </VisuallyHidden>
        </>
      )}
      <NavBar />
      <HeadingLevel>{children}</HeadingLevel>
      <HeadingLevel level={3}>
        <footer>
          <Heading>Socials</Heading>
          {branch?.social && <SocialLinks links={branch.social} />}
          {branch?.footer && <p>{branch.footer}</p>}
        </footer>
      </HeadingLevel>
    </HeadingLevel>
  );
}
