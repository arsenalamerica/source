export function getFetchUrl(url: string, params: Record<string, string>) {
  const fetchUrl = new URL(url);
  fetchUrl.search = new URLSearchParams(params).toString();
  return fetchUrl;
}
