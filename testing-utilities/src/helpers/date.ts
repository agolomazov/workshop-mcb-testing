import { MILLISECONDS_IN_SECOND, SECONDS_IN_HOUR } from '../constants/common';
export function today() {
  return new Date();
}

export function tomorrow() {
  const tomorrow = today();

  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow;
}

export function endOfHour(date: Date) {
  const endOfHour = new Date(date);

  endOfHour.setTime(
    endOfHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND
  );

  endOfHour.setMinutes(0, 0, 0);

  return endOfHour;
}

export function isToday(date: Date) {
  return date.toDateString() === today().toDateString();
}

export function toSeconds(milliseconds: number) {
  return Math.round(milliseconds / MILLISECONDS_IN_SECOND);
}
