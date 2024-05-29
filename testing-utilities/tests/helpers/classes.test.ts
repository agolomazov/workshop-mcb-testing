import { describe, expect, it, vi } from 'vitest';
import { ProgressColorClass } from '../../src/types/common';
import { getProgressColorClass } from '../../src/helpers/classes';

describe('getProgressColorClass', () => {
  it.each([
    {
      value: 0,
      result: ProgressColorClass.RED,
    },
    {
      value: 10,
      result: ProgressColorClass.RED,
    },
    {
      value: 32,
      result: ProgressColorClass.RED,
    },
    {
      value: 33,
      result: ProgressColorClass.YELLOW,
    },
    {
      value: 55,
      result: ProgressColorClass.YELLOW,
    },
    {
      value: 65,
      result: ProgressColorClass.YELLOW,
    },
    {
      value: 66,
      result: ProgressColorClass.BLUE,
    },
    {
      value: 86,
      result: ProgressColorClass.BLUE,
    },
    {
      value: 99,
      result: ProgressColorClass.BLUE,
    },
    {
      value: 100,
      result: ProgressColorClass.GREEN,
    },
  ])(
    'Если значение прогресса равно $value то добавиться класс $result',
    ({ value, result }) => {
      expect(getProgressColorClass(value)).toBe(result);
    }
  );

  it('Выбрасываем ошибку в случае если значение не валидно', () => {
    expect(() => getProgressColorClass(191)).toThrowError(/invalid/i);
    expect(() => getProgressColorClass(101)).toThrowError(/invalid/i);
    expect(() => getProgressColorClass(-1)).toThrowError(/invalid/i);
  });
});
