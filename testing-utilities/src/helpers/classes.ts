import {
  HUNDRED_PERCENT,
  LOW_PERCENT,
  MEDIUM_PERCENT,
} from '../constants/common';
import { ProgressColorClass } from '../types/common';

export function getProgressColorClass(percentage: number): ProgressColorClass {
  if (percentage < 0 || percentage > HUNDRED_PERCENT)
    throw new Error('invalid percentage value');
  if (percentage < LOW_PERCENT) return ProgressColorClass.RED;
  if (percentage < MEDIUM_PERCENT) return ProgressColorClass.YELLOW;
  if (percentage < HUNDRED_PERCENT) return ProgressColorClass.BLUE;

  return ProgressColorClass.GREEN;
}
