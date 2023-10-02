import Head from 'next/head';
import { Main, FixtureCard } from '@arsenalamerica/components';
import { Title } from '@bjeco/blocks';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const FixturesPage = (): JSX.Element => {
  const { data, error } = useSWR('/api/fixtures', fetcher);

  if (error) return <>An error has occurred.</>;
  if (!data) return <>Loading...</>;

  return (
    <>
      <Head>
        <title>Fixtures</title>
      </Head>
      <Main>
        <Title>Fixtures</Title>
        {data?.data.map((fixture) => (
          <FixtureCard key={fixture.id} {...fixture} />
        ))}
      </Main>
    </>
  );
};

export default FixturesPage;
