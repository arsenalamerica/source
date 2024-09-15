import wretch from 'wretch';

import { API_BASE_URL } from '@arsenalamerica/utils';

export const api = wretch(API_BASE_URL, {
  next: { revalidate: 300 },
}) // `revalidate` is a Next.js feature, revalidate every 5 minutes
  .errorType('json')
  .resolve((r) => r.json());

export const apiLive = wretch(API_BASE_URL, {
  next: { revalidate: 5 },
}) // `revalidate` is a Next.js feature, revalidate every 30 seconds
  .errorType('json')
  .resolve((r) => r.json());
