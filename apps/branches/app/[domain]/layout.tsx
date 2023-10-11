import './global.scss';
import { FathomNext } from '@arsenalamerica/components';
import { branches } from '@arsenalamerica/data';

export interface LayoutProps {
  children: React.ReactNode;
  params: { domain: string };
}

export default function Layout({ children, params }: LayoutProps) {
  const branchObject = branches[params.domain.replace('test.', '')];

  const data = branchObject.data;

  return (
    <>
      <FathomNext
        fathomId={data['fathom-id']}
        includedDomains={[data.domain]}
      />
      {children}
    </>
  );
}
