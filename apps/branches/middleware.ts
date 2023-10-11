import { NextRequest, NextResponse } from 'next/server';

// TODO: Get all domains from asset.json files for each application
const DOMAINS = [
  'test.cascadiagooners.com',
  'test.pdxgooners.com',
  'test.tacomagooners.com',
  'test.vancouverarsenal.com',
];

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Check for local development
  const isLocal = url.hostname === 'localhost';

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
