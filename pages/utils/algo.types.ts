import { Steps } from './enums';

export interface Cell {
  step: Steps;
  date: Date;
  idHour: number;
}

export type MatrixDayStep = Cell[][];
