import './global.scss';

import type { Metadata } from 'next';

import { BranchProvider, FathomNext, NavBar } from '@arsenalamerica/components';
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
    title: branch.name,
    description: `Welcome to ${branch.name}!`,
  };
}

export default function Layout({ children, params }: LayoutProps) {
  const branch = branchData[params.domain];

  return (
    <BranchProvider branch={branch}>
      <FathomNext
        fathomId={branch['fathom-id']}
        includedDomains={[branch.domain]}
      />
      <h1 className="screen-reader-only">{branch.name}</h1>
      <NavBar />
      {children}
    </BranchProvider>
  );
}
