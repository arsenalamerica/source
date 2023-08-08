import Head from 'next/head';
import { GameCard } from '../components';
import useSWR from 'swr';
import { find, pathEq } from 'ramda';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const GameCardPage = (): JSX.Element => {
  const { data, error } = useSWR('/api/fixtures', fetcher);

  if (error) return <>An error has occurred.</>;
  if (!data) return <>Loading...</>;

  const nextGame = find(pathEq('NS', ['time', 'status']))(data.data);

  console.log(data.data);

  return (
    <>
      <Head>
        <title>Game Card</title>
      </Head>
      <GameCard {...nextGame} />
      {/* <Placeholder data={nextGame} /> */}
    </>
  );
};

export default GameCardPage;
