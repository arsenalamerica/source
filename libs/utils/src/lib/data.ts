const api_token = process.env.MONK_TOKEN || '';

export function getFetchUrl(url: string, params: Record<string, string>) {
  const fetchUrl = new URL(url);
  fetchUrl.search = new URLSearchParams({ api_token, ...params }).toString();
  return fetchUrl;
}
