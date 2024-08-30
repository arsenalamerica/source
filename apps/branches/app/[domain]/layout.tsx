import './global.scss';

import type { Metadata } from 'next';

import { Heading, HeadingLevel, VisuallyHidden } from '@ariakit/react';
import { FathomNext, NavBar } from '@arsenalamerica/components';
import { branchData } from '@arsenalamerica/data';

export interface LayoutProps {
  children: React.ReactNode;
  params: { domain: string };
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const branch = branchData[params.domain];

  return {
    title: branch?.name,
    description: `Welcome to ${branch?.name}!`,
  };
}

export default function Layout({ children, params }: LayoutProps) {
  const branch = branchData[params.domain];

  return (
    <>
      <HeadingLevel>
        {branch && (
          <>
            <FathomNext
              fathomId={branch['fathom-id']}
              includedDomains={[branch.domain]}
            />
            <VisuallyHidden>
              <Heading>{branch.name}</Heading>
            </VisuallyHidden>
          </>
        )}

        <NavBar />
        <HeadingLevel>{children}</HeadingLevel>
      </HeadingLevel>
    </>
  );
}
