import { useEffect, useState } from "react";

export default function Positiondata() {
  const [Positions, setPostiones] = useState([]);
  const API_KEY = process.env.REACT_APP_SAFETYALL_API;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(API_KEY, requestOptions)
      .then((response) => response.json())
      .then((result) => result.workers.map((worker) => [worker.latitude, worker.longitude]))
      .then((workers) => setPostiones(workers));
  }, [Positions]);

  return {
    totalWorker: Positions,
    warningWorker: [
      [37.499590490909185, 127.0263723554437],
      [37.499427948430814, 127.02794423197847],
      [37.498553760499505, 127.02882598822454],
      [37.497625593121384, 127.02935713582038],
      [37.49629291770947, 127.02587362608637],
      [37.49754540521486, 127.02546694890695],
      [37.49646391248451, 127.02675574250912],
    ],
    cautionWorker: [
      [33.452278, 126.567803],
      [33.452671, 126.574792],
      [33.451744, 126.572441],
    ],
  };
}
