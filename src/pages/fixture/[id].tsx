import Head from 'next/head';
import { Main } from '../../components';
import { Title } from '@bjeco/blocks';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const FixturePage = (): JSX.Element => {
  const { data, error } = useSWR('/api/fixtures', fetcher);

  if (error) return <>An error has occurred.</>;
  if (!data) return <>Loading...</>;

  return (
    <>
      <Head>
        <title>Fixtures</title>
      </Head>
      <Main>
        <Title>Fixture</Title>
      </Main>
    </>
  );
};

export default FixturePage;
