import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debValue, setDebValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debValue;
};
