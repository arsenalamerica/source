import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

import { branchData } from '@arsenalamerica/data';

import { ICON_SIZES } from '../icon-sizes';

export default async function Manifest(): Promise<MetadataRoute.Manifest> {
  const headersList = await headers();
  const domain = headersList.get('host') || 'localhost';

  const branchSite = domain.startsWith('localhost')
    ? 'tacomagooners.com'
    : domain;

  const branch = branchData[branchSite];

  return {
    name: branch.name,
    short_name: branch.name,
    description: branch.name,
    start_url: '/',
    display: 'standalone',
    background_color: '#da1f26',
    theme_color: '#da1f26',
    icons: ICON_SIZES.map((size) => ({
      src: `/icon/${size}`,
      sizes: `${size}x${size}`,
      type: 'image/png',
    })),
  };
}
