/* eslint-disable-next-line */
export interface HomeProps {
  params: { domain: string };
}

export function Home({ params }: HomeProps) {
  return (
    <div>
      <h1>Welcome to {params.domain}!</h1>
    </div>
  );
}

export default Home;
