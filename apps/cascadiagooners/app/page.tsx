import data from '../assets/data.json';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Main, NextGame } from '@arsenalamerica/components';
import { SocialLinks } from '@arsenalamerica/components';

export default async function Index() {
  return (
    <Main variant="landing">
      <h1 className="screen-reader-only">{data.name}</h1>
      <Logo title={data.name} role="img" />
      <NextGame pub={data.pub} />
      <SocialLinks links={data.social} />
    </Main>
  );
}
