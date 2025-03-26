'use client'

// import node module libraries
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

let loadedCallback = null;
let loaded = false;

const Odometer = dynamic(
  async () => {
    const mod = await import("react-odometerjs");
    loaded = true;
    if (loadedCallback != null) {
      loadedCallback();
    }
    return mod;
  },
  {
    ssr: false,
    loading: () => 0
  }
);

const GKOdometer = ({ value }) => {
  const [odometerLoaded, setOdometerLoaded] = useState(loaded);
  const [odometerValue, setOdometerValue] = useState(0);

  loadedCallback = () => {
    setOdometerLoaded(true);
  };
  useEffect(() => {
    if (odometerLoaded) {
      setOdometerValue(value);
    }
  }, [odometerLoaded]);

  useEffect(() => {
    setOdometerValue(value);
  }, [value]);

  return <Odometer value={odometerValue} />;
}


export default GKOdometer;
