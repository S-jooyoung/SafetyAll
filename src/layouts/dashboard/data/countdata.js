import { useEffect, useState } from "react";

export default function Countdata() {
  const [Counts, setCounts] = useState(0);
  const API_KEY = process.env.REACT_APP_SAFETYALL_API;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(API_KEY, requestOptions)
      .then((response) => response.json())
      .then((result) => result.workers.length)
      .then((count) => setCounts(count));
  }, [Counts]);

  return {
    totalCount: Counts,
    warningCount: 1,
    cautionCount: 0,
  };
}
