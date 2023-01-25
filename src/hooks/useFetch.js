import { useEffect, useCallback, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function sortData(data) {
    let sortedData
    sortedData = [...data].sort((a, b) => {
      return a.name.common.localeCompare(b.name.common);
    });
    setData(sortedData);
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal
    const fetchData = async () => {
        try {
          setLoading(true)
          const response = await fetch(url, {signal});
          const data = await response.json()
          sortData(data)
        } catch (error) {
          const err = error.response ? error.response.data : "Server Error"
          setError(err)
        }
        setLoading(false)
    }
    fetchData()
    return () => {
      controller.abort()
    }
  }, [url])

  return {data, loading, error}
}

export default useFetch;
