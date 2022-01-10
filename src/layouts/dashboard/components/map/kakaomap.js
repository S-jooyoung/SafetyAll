import React, { useEffect, useRef, useState } from "react";

const { kakao } = window;

const KakaoMap = ({ mPositions }) => {
  const container = useRef();

  const markerPositions = mPositions;
  const [kakaoMap, setkakaoMap] = useState(null);
  const [, setMarkers] = useState([]);

  useEffect(() => {
    const center = new kakao.maps.LatLng(37.50802, 127.062835);
    const options = {
      center,
      level: 3,
    };
    const map = new kakao.maps.Map(container.current, options);

    setkakaoMap(map);
  }, [container]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    // save center position
    const center = kakaoMap.getCenter();

    // relayout and ...
    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);
  }, [kakaoMap]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    const positions = markerPositions.map((pos) => new kakao.maps.LatLng(...pos));

    setMarkers((markers) => {
      // clear prev markers
      markers.forEach((marker) => marker.setMap(null));

      // assign new markers
      return positions.map((position) => new kakao.maps.Marker({ map: kakaoMap, position }));
    });

    if (positions.length > 0) {
      const bounds = positions.reduce(
        (bound, latlng) => bound.extend(latlng),
        new kakao.maps.LatLngBounds()
      );

      kakaoMap.setBounds(bounds);
    }
  }, [kakaoMap, markerPositions]);

  return <div ref={container} style={{ width: "100%", height: "500px" }} />;
};

export default KakaoMap;
