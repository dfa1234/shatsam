import { Days, Steps } from "./enums";

export const PERIODS: number[] = [];
for (let i = 0; i < 10; i++) {
  PERIODS.push(i);
}

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
  "star0",
  "star1",
  "star2",
  "star3",
  "star4",
  "star5",
  "star6",
];

export const DAY_KEY = ["day0", "day1", "day2", "day3", "day4", "day5", "day6"];
