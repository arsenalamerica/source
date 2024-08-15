import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { branchData } from '@arsenalamerica/data';

const DOMAINS = Object.keys(branchData);

export function middleware(request: NextRequest) {
  // Get the current response
  const response = NextResponse.next();

  // Check the origin header
  const origin: string = request.headers.get('origin') || '';

  // If the origin is in our allowed list of sites, or a vercel preview subdomain,
  // or we are in development mode, allow the cross-origin request
  if (
    DOMAINS.map((domain) => 'https://' + domain).includes(origin) ||
    DOMAINS.map((domain) => 'https://test.' + domain).includes(origin) ||
    origin.endsWith('.vercel.app') ||
    process.env.NODE_ENV === 'development'
  ) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  return response;
}
