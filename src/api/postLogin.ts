/* import { useEffect, useState } from "react";
import api from "./axios";

export function getTodos() {
  const url = "https://jsonplaceholder.typicode.com/todos/";
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(url);
        setResult(res.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return { loading, result, error };
}
 */
