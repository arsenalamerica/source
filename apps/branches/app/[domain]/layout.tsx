'use client';

import './global.scss';
import { FathomNext, BranchProvider } from '@arsenalamerica/components';
import { branches } from '@arsenalamerica/data';

export interface LayoutProps {
  children: React.ReactNode;
  params: { domain: string };
}

export default function Layout({ children, params }: LayoutProps) {
  const branchObject = branches[params.domain];

  const data = branchObject.data;

  return (
    <BranchProvider branch={branchObject}>
      <FathomNext
        fathomId={data['fathom-id']}
        includedDomains={[data.domain]}
      />
      <h1 className="screen-reader-only">{data.name}</h1>
      {children}
    </BranchProvider>
  );
}
