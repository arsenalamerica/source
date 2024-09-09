import wretch from 'wretch';

import { API_BASE_URL } from '@arsenalamerica/utils';

export const api = wretch(API_BASE_URL, { next: { revalidate: 3600 } }) // `revalidate` is a Next.js feature, revalidate every hour
  .errorType('json')
  .resolve((r) => r.json());

export const apiLive = wretch(API_BASE_URL, { next: { revalidate: 60 } }) // `revalidate` is a Next.js feature, revalidate every minute
  .errorType('json')
  .resolve((r) => r.json());
