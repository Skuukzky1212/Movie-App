import { useEffect, useState } from "react";

const apiAccessToken = import.meta.env.VITE_MOVIE_API_ACCESS_TOKEN;

const DEFAULT_HEADERS_API = {
  accept: "application/json",
  Authorization: `Bearer ${apiAccessToken}`,
};

const useFetch = ({ apiUrl, method = "GET", headers = {} }) => {
  const [dataFetched, setDataFetch] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiOptions = {
      method: method,
      headers: {
        ...DEFAULT_HEADERS_API,
        ...headers,
      },
    };
    setIsLoading(true);
    fetch(apiUrl, apiOptions)
      .then(async (res) => {
        if (!res.ok) {
          if (res.status === 404) {
            console.error("Resource not found");
            return;
          }
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setDataFetch(data);
      })
      .catch((err) => {
        throw new Error("Error here! ", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrl, method, JSON.stringify(headers)]);
  return { dataFetched, isLoading };
};
export default useFetch;
