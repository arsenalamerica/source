export const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.pnwarmory.com'
    : 'http://localhost:3333';
