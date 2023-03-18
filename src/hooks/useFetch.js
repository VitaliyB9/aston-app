import { useState } from "react";

export const useFetch = (callback) => {
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState("");

  const fetching = async (...args) => {
    try {
      setLoad(true);
      await callback(...args);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoad(false);
    }
  };
  return [fetching, load, err];
};
