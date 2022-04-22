import Head from 'next/head';
import Logo from '../components/Logo';
import Main from '../components/Main';
import pkg from '../../package.json';

const Home = () => {
  return (
    <Main>
      <Head>
        <title>{pkg.name}</title>
      </Head>

      <Logo />
    </Main>
  );
};

export default Home;
