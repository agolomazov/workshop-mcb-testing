import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  today,
  tomorrow,
  endOfHour,
  isToday,
  toSeconds,
} from '../../src/helpers/date';

describe('Time module', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('Получение текущей даты [today]', () => {
    const date = new Date('1988-07-16');

    vi.setSystemTime(date);

    expect(today()).toEqual(date);
  });

  it('Получение завтрашней даты [tomorrow()]', () => {
    const date = new Date('1988-07-16');
    const tomorrowDate = new Date('1988-07-17');

    vi.setSystemTime(date);

    const result = tomorrow();

    expect(result).toEqual(tomorrowDate);
  });

  it('Получение следующего часа после определенного [endOfHour()]', () => {
    const date = new Date('2024-05-01T14:03:01');
    const endOfHourTime = new Date('2024-05-01T15:00:00');

    vi.setSystemTime(date);

    const result = endOfHour(date);

    expect(result).toEqual(endOfHourTime);
  });

  it('Проверка, соответствует ли данная дата текущему дню [isToday()]', () => {
    const date = new Date('2024-04-30');

    vi.setSystemTime(date);

    expect(isToday(date)).toBe(true);
  });

  it.each([
    { value: 499, result: 0 },
    { value: 500, result: 1 },
    { value: 1020, result: 1 },
    { value: 1501, result: 2 },
  ])(
    'Конвертация $value миллисекунд в секунды [toSeconds()]',
    ({ value, result }) => {
      expect(toSeconds(value)).toBe(result);
    }
  );
});
