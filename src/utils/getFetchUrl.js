const getFetchUrl = (url, params) => {
  const fetchUrl = new URL(url);
  fetchUrl.search = new URLSearchParams(params);

  return fetchUrl;
};

export default getFetchUrl;
