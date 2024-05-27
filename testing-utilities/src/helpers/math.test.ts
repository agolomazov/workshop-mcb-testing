import { it, expect, describe } from 'vitest';
import * as math from './math';

describe('Math module', () => {
  describe('sum()', () => {
    describe('Простые проверки модуля', () => {
      it('Проверка суммы чисел', () => {
        expect(math.sum(2, 3)).toBe(5);
      });
      it('Проверка суммы положительных чисел', () => {
        expect(math.sum(3, 5)).toBe(8);
      });
      it('Проверка суммы отрицательных чисел', () => {
        expect(math.sum(-1, -13)).toBe(-14);
      });
      it('Проверка суммы числа и NaN', () => {
        expect(math.sum(4, NaN)).toBeNaN();
      });
      it('Проверка суммы числа и Infinity', () => {
        expect(math.sum(4, Infinity)).toBe(Infinity);
      });
    });

    describe('Параметрические тесты', () => {
      it.each([
        { argA: 2, argB: 3, result: 5 },
        { argA: 3, argB: 5, result: 8 },
        { argA: -1, argB: -13, result: -14 },
        { argA: 4, argB: NaN, result: NaN },
        { argA: 4, argB: Infinity, result: Infinity },
      ])(
        'Проверка суммы чисел $argA и $argB равно $result',
        ({ argA, argB, result }) => {
          expect(math.sum(argA, argB)).toBe(result);
        }
      );
    });
  });
});
