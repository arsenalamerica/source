import Head from 'next/head';
import { Main, GameCard } from '../components';
import { Title, Placeholder } from '@bjeco/blocks';
import test from './test.json';

const GameCardPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Game Card</title>
      </Head>
      <Main>
        <Title>Game Card</Title>
        <p>This is the game card page.</p>
        <GameCard {...test.data[0]} />
        <Placeholder data={test.data[0]} />
      </Main>
    </>
  );
};

export default GameCardPage;
