import { Days, Steps } from "./enums";

export const PERIODS = [...Object(Array(10)).keys()];

// a day has 10 periods, each period is linked to one of the 7 steps
export const NB_PERIOD_DAY = PERIODS.length;

//A cycle is made of 7 steps. "Cycle" is used for the whole thing and "step" for the division of the cycle (as a convention)
export const CYCLE = [
  Steps.S,
  Steps.T,
  Steps.M,
  Steps.H,
  Steps.N,
  Steps.K,
  Steps.L,
];
export const NB_STEPS = CYCLE.length;

export const WEEK = [
  Days.SUNDAY,
  Days.MONDAY,
  Days.TUESDAY,
  Days.WEDNESDAY,
  Days.THURSDAY,
  Days.FRIDAY,
  Days.SATURDAYS,
];

export const CYCLE_KEY = [
  "star-0",
  "star-1",
  "star-2",
  "star-3",
  "star-4",
  "star-5",
  "star-6",
];

export const DAY_KEY = [
  "day-0",
  "day-1",
  "day-2",
  "day-3",
  "day-4",
  "day-5",
  "day-6",
];

export const MAP_CYCLE_ICONS = new Map([
  [Steps.S, "saturn"],
  [Steps.T, "jupiter"],
  [Steps.M, "mars"],
  [Steps.H, "mercury"],
  [Steps.N, "venus"],
  [Steps.K, "neptune"],
  [Steps.L, "moon"],
]);
