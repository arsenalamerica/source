import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import { branches } from '@arsenalamerica/data';
import { waitUntil } from '@vercel/functions';

const DOMAINS = Object.keys(branches);

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

function checkAndBlockBaddie(
  request: NextRequest,
  {
    projectId = process.env.VERCEL_PROJECT_ID,
    vercelToken = process.env.VERCEL_TOKEN,
    includesSubstrings = BADDIES,
  }: {
    projectId?: string;
    vercelToken?: string;
    includesSubstrings?: string[];
  } = {},
) {
  if (!request) {
    console.warn('checkAndBlockBaddie(): Passing the NextRequest is required');
    return;
  }

  if (!request.ip) {
    if (process.env.NODE_ENV === 'development') {
      console.info(
        'checkAndBlockBaddie(): Missing ip, which is expected in development when uing "request.ip"',
      );
    } else {
      console.warn(
        'checkAndBlockBaddie(): Missing request.ip, which is provided by Vercel as a host provicer',
      );
    }
    return;
  }

  if (!projectId) {
    console.warn('checkAndBlockBaddie(): Missing { projectId }');
    return;
  }

  if (!vercelToken) {
    console.warn('checkAndBlockBaddie(): Missing { vercelToken }');
    return;
  }

  if (!includesSubstrings) {
    console.warn('checkAndBlockBaddie(): Missing { includesSubstrings }');
    return;
  }

  const isBaddie: boolean = includesSubstrings.some((bad) =>
    request.nextUrl.pathname.includes(bad),
  );

  if (isBaddie) {
    waitUntil(
      fetch(
        `https://api.vercel.com/v1/security/firewall/config?projectId=${projectId}`,
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
              ip: request.ip,
              notes: `Deny Baddie ${request.ip}`,
            },
          }),
        },
      ),
    );
  }

  return isBaddie;
}

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const url = request.nextUrl;

  // First, check for bad actors, and rewrite them to a local IP address. If we have a match,
  // update the firewall to block the IP address.
  // https://vercel.com/docs/security/vercel-waf/examples#deny-traffic-from-a-set-of-ip-addresses

  const isBaddie = checkAndBlockBaddie(request, {
    projectId: process.env.VERCEL_BRANCH_PROJECT_ID,
  });

  if (isBaddie) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
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
    console.warn('Not a branch site:', siteDomain);
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
