import { ImageResponse } from 'next/og';

import { branchLogo } from '@arsenalamerica/data';

import { ICON_SIZES } from '../../icon-sizes';

export function generateImageMetadata() {
  return ICON_SIZES.map((size) => ({
    contentType: 'image/png',
    size: { width: size, height: size },
    id: size,
  }));
}

// Image generation
export default function Icon({
  id,
  params,
}: {
  id: string;
  params: { domain: string };
}) {
  const Logo = branchLogo[params.domain];
  const size = parseInt(id, 10); // Convert id to a number

  const isFavicon = size === 32;

  const logoSize = isFavicon ? size : Math.floor(size * 0.9);
  const backgroundImage = isFavicon
    ? 'none'
    : 'linear-gradient(0deg, rgba(163,22,27,1) 0%, rgba(218,31,38,1) 100%)';

  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage,
        }}
      >
        <Logo width={logoSize} preserveAspectRatio="xMidYMid meet" />
      </div>
    ),
    // Options: https://nextjs.org/docs/app/api-reference/functions/image-response
    {
      width: size,
      height: size,
    },
  );
}
