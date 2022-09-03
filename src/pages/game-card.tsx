import Head from 'next/head';
import { Main, GameCard } from '../components';
import { Title, Placeholder } from '@bjeco/blocks';
import useSWR from 'swr';
import { find, pathEq } from 'ramda';

const fetcher = (url) => fetch(url).then((res) => res.json());

const GameCardPage = (): JSX.Element => {
  const { data, error } = useSWR('/api/fixtures', fetcher);

  if (error) return <>An error has occurred.</>;
  if (!data) return <>Loading...</>;

  const nextGame = find(pathEq(['time', 'status'], 'NS'))(data.data);

  return (
    <>
      <Head>
        <title>Game Card</title>
      </Head>
      <Main>
        <GameCard {...nextGame} />
        {/* <Placeholder data={nextGame} /> */}
      </Main>
    </>
  );
};

export default GameCardPage;
