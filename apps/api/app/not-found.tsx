import { Metadata } from 'next';
import Image from 'next/image';

import notFound from './404.jpeg';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return <Image src={notFound} alt="Not Found" />;
}
