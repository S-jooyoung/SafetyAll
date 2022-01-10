import React from "react";
import KakaoMap from "./kakaomap";

const Map = ({ markerPositions }) => {
  const mPositions = markerPositions;

  return <KakaoMap mPositions={mPositions} />;
};

export default Map;
