import { MILLISECONDS_IN_SECOND } from '../constants/common';

export function formatSecondsWithSign(seconds: number): string {
  return `${seconds >= 0 ? '+' : '-'}${formatSeconds(seconds)}`;
}

export function formatSeconds(seconds: number): string {
  const date = new Date();

  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND);

  const utc = date.toUTCString();

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6);
}
