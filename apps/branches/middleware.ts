import { NextRequest, NextResponse } from 'next/server';

// TODO: Get all domains from asset.json files for each application
const DOMAINS = [
  'cascadiagooners.com',
  'pdxgooners.com',
  'test.tacomagooners.com',
  'vancouverarsenal.com',
];

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  console.log(url);

  // Check for local development
  const isLocal = url.hostname === 'localhost';

  // Get the hostname from the URL, or if we are local, from the 'site' query parameter
  const siteDomain = isLocal
    ? request.nextUrl.searchParams.get('site') || ''
    : url.hostname;

  // Check if the domain is one of our branch sites
  const isBranchSite = DOMAINS.includes(siteDomain);

  const searchParams = request.nextUrl.searchParams.toString();

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`;

  if (isBranchSite) {
    return NextResponse.rewrite(new URL(`/${siteDomain}${path}`, request.url));

    // return NextResponse.rewrite(
    //   new URL(`/site${path === '/' ? '' : path}`, request.url),
    // );
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
