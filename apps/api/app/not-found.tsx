import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <h2>Not Found</h2>
      <p>This is not the page you&apos;re looking for...</p>
    </main>
  );
}
