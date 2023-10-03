import './global.scss';
import data from '../data.json';
import { FathomNext } from '@arsenalamerica/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | ' + data.name,
    default: data.name,
  },
  metadataBase: new URL('https://' + data.domain),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <FathomNext
        fathomId={data['fathom-id']}
        includedDomains={[data.domain]}
      />
      <body>{children}</body>
    </html>
  );
}
