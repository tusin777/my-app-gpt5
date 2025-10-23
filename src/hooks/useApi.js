import { useState, useCallback, useDebugValue } from "react";
import axios from "axios";

const useApi = (baseUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const api = axios.create({
    baseURL: baseUrl,
    headers: { "Content-Type": "application/json" },
  });

  const request = useCallback(
    async (method, endpoint, body = null) => {
      setLoading(true);
      try {
        const response = await api[method](endpoint, body);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [api]
  );

  const get = useCallback((e) => request("get", e), [request]);
  const post = useCallback((e, b) => request("post", e, b), [request]);
  const put = useCallback((e, b) => request("put", e, b), [request]);
  const patch = useCallback((e, b) => request("patch", e, b), [request]);
  const remove = useCallback((e) => request("delete", e), [request]);

  useDebugValue(
    { data, error },
    ({ data, error }) => `data: ${JSON.stringify(data)}, error: ${error}`
  );

  return { data, loading, error, get, post, put, patch, remove };
};

export default useApi;
