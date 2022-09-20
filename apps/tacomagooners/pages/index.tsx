import { Logo, SocialBar } from '../components';

const styles = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontSize: 'calc(10px + 2vmin)',
  gap: '4rem',
  height: '100%',
  justifyContent: 'center',
};

const Home = (): JSX.Element => {
  return (
    <main style={styles as React.CSSProperties}>
      <Logo />
      <SocialBar />
    </main>
  );
};

export default Home;
