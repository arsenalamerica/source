import { branchLogo } from '@arsenalamerica/data';
import { ImageResponse } from '@vercel/og';

// Route segment config
export const runtime = 'edge';

// Image config exports: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#config-exports
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default function Image({ params }: { params: { domain: string } }) {
  const Logo = branchLogo[params.domain];

  return new ImageResponse(
    (
      <div
        style={{
          ...size,
          backgroundColor: '#da1f26',
          backgroundImage:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo height={size.height * 0.9} preserveAspectRatio="xMidYMid meet" />
      </div>
    ),
    // Options: https://nextjs.org/docs/app/api-reference/functions/image-response
    {
      ...size,
    },
  );
}
