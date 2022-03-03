import { add, previousWednesday, startOfDay, sub } from 'date-fns';
import { MatrixDayStep } from './algo.types';
import { NB_PERIOD_DAY, NB_STEPS } from './constants';
import { Steps } from './enums';

//24hours / NB_PERIOD_DAY = 2.4 hours, which is 2h24min
const addPeriod = (d: Date) => add(d, { hours: 2, minutes: 24 });

const startDayOnSunrise = (d: Date) => sub(d, { hours: 6 });

export const getMatrix = (): MatrixDayStep => {
  const lastHamahBeTekufa = new Date(2009, 3, 8);
  const dateReference = startOfDay(lastHamahBeTekufa);
  const wednesdayStart = previousWednesday(dateReference);

  let date = wednesdayStart;
  let step = 0;
  let period = 0;

  const result: MatrixDayStep = [];

  for (let idHour = 0; idHour < NB_STEPS * NB_PERIOD_DAY; idHour++) {
    step = step >= NB_STEPS ? step - NB_STEPS : step;
    period = period >= NB_PERIOD_DAY ? period - NB_PERIOD_DAY : period;

    const day = date.getDay();

    if (!result[day]) {
      result[day] = [];
    }

    result[day][period] = {
      step,
      date: startDayOnSunrise(date),
      idHour,
    };

    date = addPeriod(date);
    step++;
    period++;
  }

  return result;
};

export const getNow = (): Steps => {
  const now = new Date();
  const timestampNow = now.getTime();
  const calc = ((timestampNow + 1257) / 1000 / 3600) % 7;
  const value = Math.floor(calc);
  return value - 1;
};
