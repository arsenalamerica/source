import { ImageResponse } from 'next/og';

import { branchLogo } from '@arsenalamerica/data';

import { ICON_SIZES } from '../../icon-sizes';

// Route segment config
// export const runtime = 'edge';

// Image config exports: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#config-exports
// export const size = {
//   width: 256,
//   height: 256,
// };

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

  const logoSize = isFavicon ? size : size * 0.9;
  const backgroundColor = isFavicon ? 'transparent' : '#da1f26';

  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor,
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
