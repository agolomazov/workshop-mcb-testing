import { it, expect, describe, vi } from 'vitest';
import { id } from '../../src/helpers/id';

describe('id()', () => {
  it('Генерация случайной строки для проверки метода id()', () => {
    const nowValue = 10;
    const mathRandomValue = 0.12;
    const result = 'a4bipx4bipx5';

    vi.spyOn(Date, 'now').mockReturnValueOnce(nowValue);
    vi.spyOn(Math, 'random').mockReturnValueOnce(mathRandomValue);

    expect(id()).toBe(result);
  });
});
