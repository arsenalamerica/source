export interface HomeProps {
  params: { domain: string };
}

export default function Home({ params }: HomeProps) {
  return (
    <div>
      <h1>Welcome to {params.domain}!</h1>
      <h2>Cool path</h2>
    </div>
  );
}
