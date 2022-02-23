import { getSunTimes } from "./suncalc/suncalc";
import { GetSunTimesResult } from "./suncalc/suncalc.types";

export const getNavigatorLocation = () => {
  return new Promise<GetSunTimesResult>((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(
          getSunTimes(
            new Date(position.timestamp),
            position.coords.latitude,
            position.coords.longitude
          )
        );
      });
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
};
