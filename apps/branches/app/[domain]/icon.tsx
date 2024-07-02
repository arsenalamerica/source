import { ImageResponse } from '@vercel/og';
import { branchLogo } from '@arsenalamerica/data';

// Route segment config
export const runtime = 'edge';

// Image config exports: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#config-exports
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon({ params }: { params: { domain: string } }) {
  const Logo = branchLogo[params.domain];

  return new ImageResponse(
    (
      <div
        style={{
          ...size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo width={size.width} preserveAspectRatio="xMidYMid meet" />
      </div>
    ),
    // Options: https://nextjs.org/docs/app/api-reference/functions/image-response
    {
      ...size,
    },
  );
}
