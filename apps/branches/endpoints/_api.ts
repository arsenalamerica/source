import wretch from 'wretch';

import { API_BASE_URL } from '@arsenalamerica/utils';

const api = wretch(API_BASE_URL, {})
  .errorType('json')
  .resolve((r) => r.json());

export default api;
