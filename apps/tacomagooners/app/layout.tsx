import './global.scss';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Tacoma Gooners',
    default: 'Tacoma Gooners',
  },
  metadataBase: new URL('https://tacomagooners.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
