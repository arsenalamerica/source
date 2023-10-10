import './404.scss';
import Image from 'next/image';
import notFound from './404.jpeg';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return <Image src={notFound} alt="Not Found" />;
}
