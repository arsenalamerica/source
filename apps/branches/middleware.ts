import { NextRequest, NextResponse } from 'next/server';

import { branches } from '@arsenalamerica/data';

const DOMAINS = Object.keys(branches);

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Check for local development
  const isLocal = url.hostname === 'localhost';
  // Check if we are on a preview deployment
  const isPreview = url.hostname.endsWith('vercel.app');

  // Get the hostname from the URL, or if we are local, from the 'site' query parameter
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
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};
