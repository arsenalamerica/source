import { headers } from 'next/headers';

/* eslint-disable-next-line */
export interface HomeProps {}

export default function Home(props: HomeProps) {
  const headersList = headers();

  headersList.forEach((key, value) => console.log([key, value]));

  return (
    <div>
      <h1>Welcome to !</h1>
      <p>Stuff</p>
    </div>
  );
}
