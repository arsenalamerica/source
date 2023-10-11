import { branches } from '@arsenalamerica/data';
import { Main, NextGame } from '@arsenalamerica/components';
import { SocialLinks } from '@arsenalamerica/components';

export interface HomeProps {
  params: { domain: string };
}

export default async function Home({ params }: HomeProps) {
  const branchObject = branches[params.domain.replace('test.', '')];

  const branchData = branchObject.data;
  const BranchLogo = branchObject.Logo;

  return (
    <Main variant="landing">
      <h1 className="screen-reader-only">{branchData.name}</h1>
      <BranchLogo title={branchData.name} role="img" />
      <NextGame pub={branchData.pub} />
      <SocialLinks links={branchData.social} />
    </Main>
  );
}
