import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

const useTwitter = () => {
  const { data, error } = useSWR(`/api/twitter`, fetcher);

  return {
    ...data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useTwitter;
