import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import { branchData } from '@arsenalamerica/data';

const DOMAINS = Object.keys(branchData);

const BADDIES = [
  '.asp',
  '.aspx',
  '.env',
  '.php',
  '/admin',
  '/login',
  'wp-admin',
  'wp-content',
  'wp-includes',
  'wp-json',
  'wp-login',
];

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const url = request.nextUrl;
  const ip = request.ip;

  // First, check for bad actors, and rewrite them to a local IP address. If we have a match,
  // update the firewall to block the IP address.
  // https://vercel.com/docs/security/vercel-waf/examples#deny-traffic-from-a-set-of-ip-addresses

  const isBaddie = BADDIES.some((bad) => url.pathname.includes(bad));

  if (isBaddie) {
    const now = new Date();
    const blockTime = now.toISOString();

    const notes = `${blockTime} - Auto Blocked: ${ip} `;
    console.log(notes);
    event.waitUntil(
      fetch(
        `https://api.vercel.com/v1/security/firewall/config?projectId=${process.env.VERCEL_BRANCH_PROJECT_ID}&teamId=${process.env.VERCEL_TEAM_ID}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'ip.insert',
            id: null,
            value: {
              action: 'deny',
              hostname: '*',
              ip,
              notes,
            },
          }),
        },
      )
        .then((res) => {
          if (res.ok) {
            console.warn(notes);
          } else {
            console.error(res.status);
          }
        })
        .catch((err) => console.error(err)),
    );

    return NextResponse.json(
      { error: 'BYE FELICIA', ip: `${ip}` },
      { status: 403 },
    );
  }

  // Check for local development
  const isLocal = url.hostname === 'localhost';
  // Check if we are on a preview deployment
  const isPreview = url.hostname.endsWith('vercel.app');

  // Get the hostname from the URL, or if we are local, from the 'domain' query parameter
  const siteDomain = isLocal
    ? request.nextUrl.searchParams.get('domain') || url.hostname
    : url.hostname;

  // Check if the domain is one of our branch sites
  const isBranchSite = DOMAINS.includes(siteDomain);

  if (isBranchSite) {
    return NextResponse.rewrite(
      new URL(`/${siteDomain}${url.pathname}`, request.url),
    );
  } else if (isPreview) {
    // Set the first branch site as the default build preview domain
    return NextResponse.rewrite(
      new URL(`/${DOMAINS[0]}${url.pathname}`, request.url),
    );
  } else {
    if (!isLocal) {
      console.warn('Not a branch site:', siteDomain);
    }
    // Keep the url at the base path for non-branch sites so we show our 404 page
    return NextResponse.rewrite(new URL(`/`, request.url));
  }
}

export const config = {
  matcher: [
    // /*
    //  * Match all paths except for:
    //  * 1. /api routes
    //  * 2. /_next (Next.js internals)
    //  * 3. /_static (inside /public)
    //  * 4. all root files inside /public (e.g. /favicon.ico)
    //  */
    // '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',

    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest).*)',
  ],
};
