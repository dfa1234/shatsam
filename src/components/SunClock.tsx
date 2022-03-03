import { useCallback, useState } from "react";
import { getNavigatorLocation } from "../utils/getNavigatorLocation";
import { Clock } from "./Clock";

export const SunClock = () => {
  const [sunTime, setSunTime] = useState();
  const clickLocation = useCallback(() => {
    getNavigatorLocation()
      .then((result: any) => {
        setSunTime(result);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <>
      <Clock />

      <button onClick={clickLocation}>Location</button>
      {!!sunTime && <pre>{JSON.stringify(sunTime, null, 2)}</pre>}
    </>
  );
};
