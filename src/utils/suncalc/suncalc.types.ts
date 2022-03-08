/**
 * Adapted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/378ff849464bae9ba91369741e600ecaed356e68/types/suncalc/index.d.ts
 */
export interface GetSunTimesResult {
  dawn: Date;
  dusk: Date;
  goldenHour: Date;
  goldenHourEnd: Date;
  nadir: Date;
  nauticalDawn: Date;
  nauticalDusk: Date;
  night: Date;
  nightEnd: Date;
  solarNoon: Date;
  sunrise: Date;
  sunriseEnd: Date;
  sunset: Date;
  sunsetStart: Date;
}

export interface GetSunPositionResult {
  altitude: number;
  azimuth: number;
}

export interface GetMoonPositionResult {
  altitude: number;
  azimuth: number;
  distance: number;
  parallacticAngle: number;
}

export interface GetMoonIlluminationResult {
  fraction: number;
  phase: number;
  angle: number;
}

export interface GetMoonTimes {
  rise: Date;
  set: Date;
  alwaysUp?: true;
  alwaysDown?: true;
}
