import { it, expect, describe, vi } from 'vitest';
import { getExchangeRate } from '../../src/helpers/currency';

describe('getExchangeRate()', () => {
  it('Вернет значение конвертации валют', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(2);

    expect(getExchangeRate('US', 'UK')).toBe(2);
  });

  it('Отработал логгер в ходе выполнения метода', () => {
    const logSpy = vi.spyOn(console, 'log');

    getExchangeRate('US', 'UK');

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toHaveBeenLastCalledWith(
      'Совершаем перевод средств из US в UK'
    );
  });
});
