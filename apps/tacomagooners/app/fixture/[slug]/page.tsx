'use client';

import Head from 'next/head';
import { Main } from '@arsenalamerica/components';
import { Title } from '@bjeco/blocks';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const FixturePage = (): JSX.Element => {
  const { data, error } = useSWR('/api/fixtures', fetcher);

  if (error) return <>An error has occurred.</>;
  if (!data) return <>Loading...</>;

  return (
    <>
      <Head>
        <title>Fixture</title>
      </Head>
      <Main>
        <Title>Fixture</Title>
      </Main>
    </>
  );
};

export default FixturePage;
