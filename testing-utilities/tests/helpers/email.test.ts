import delay from 'delay';
import { it, expect, describe, vi } from 'vitest';
import { sendEmail } from '../../src/helpers/email';

vi.mock('delay');

describe('sendEmail', () => {
  it('Успешная отправка письма на почту', async () => {
    vi.mocked(delay).mockResolvedValueOnce(undefined);

    const result = await sendEmail('cesear@bk.ru', 'Привет, новый клиент');

    expect(result).toBeUndefined();
  });
});
