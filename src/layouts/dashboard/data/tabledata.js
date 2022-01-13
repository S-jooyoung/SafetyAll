// Soft UI Dashboard React components

import { useEffect, useState } from "react";

export default function Tabledata() {
  const [workerTable, setWorkerTable] = useState([]);
  const API_KEY = process.env.REACT_APP_SAFETYALL_API;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(API_KEY, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        result.workers.map((worker) => ({
          작업자: worker.workerName,
          연락처: worker.workerPhoneNum,
          행동: worker.status,
        }))
      )
      .then((workers) => setWorkerTable(workers));
  }, [workerTable]);

  return {
    columns: [
      { name: "작업자", align: "center" },
      { name: "연락처", align: "center" },
      { name: "행동", align: "center" },
    ],

    rows: workerTable,
  };
}
