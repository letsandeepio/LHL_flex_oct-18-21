import { useEffect, useState } from 'react';

const useQuery = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) setError(true);
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return {loading, data, error};
};

export default useQuery;
