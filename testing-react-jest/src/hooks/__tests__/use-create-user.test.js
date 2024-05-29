import { renderHook, act } from '@testing-library/react'
import { useCreateUser } from '../use-create-user'
import { passwordValidationErrors } from '../../constants/validation';

describe('useCreateUser()', () => {
  it('Вернется объект с корректными полями', () => {
    const { result } = renderHook(useCreateUser);

    expect(result.current).toHaveProperty('successMessage');
    expect(result.current).toHaveProperty('errorMessage');
    expect(result.current).toHaveProperty('onSuccess');
    expect(result.current).toHaveProperty('onError');
    expect(result.current).toHaveProperty('onSubmit');
  });

  it('Проверяем корректность типов полей хука', () => {
    const { result } = renderHook(useCreateUser);

    expect(typeof result.current.successMessage).toBe('string');
    expect(typeof result.current.errorMessage).toBe('string');
    expect(typeof result.current.onSubmit).toBe('function');
    expect(typeof result.current.onError).toBe('function');
    expect(typeof result.current.onSuccess).toBe('function');
  });

  it('Проверяем установку successMessage', () => {
    const { result } = renderHook(useCreateUser);

    expect(result.current.successMessage).toBe('');

    act(() => {
      result.current.onSuccess({ name: 'Anton', password: 'qweTR123!!##' });
    });

    expect(result.current.successMessage).toMatchSnapshot();
  });

  it('Проверяем установку errorMessage', () => {
    const errorMessage = 'shit happens';
    const { result } = renderHook(useCreateUser);

    expect(result.current.errorMessage).toBe('');

    act(() => {
      result.current.onError(new Error(errorMessage));
    });

    expect(result.current.errorMessage).toBe(errorMessage);
  });

  it('Проверка выброса ошибки - короткий пароль', async () => {
    const { result } = renderHook(useCreateUser);

    await expect(result.current.onSubmit({ password: '123' })).rejects.toThrow(passwordValidationErrors.length);
  })

  it('Проверка выброса ошибки - неправильный регистр символов', async () => {
    const { result } = renderHook(useCreateUser);

    await expect(result.current.onSubmit({ password: '1234567890' })).rejects.toThrow(
      passwordValidationErrors.case,
    );
  });

  it('Проверка выброса ошибки - нет цифр', async () => {
    const { result } = renderHook(useCreateUser);

    await expect(
      result.current.onSubmit({ password: 'asfjADASDlkjd##!@' }),
    ).rejects.toThrow(passwordValidationErrors.number);
  });

  it('Проверка выброса ошибки - нет спецсимволов', async () => {
    const { result } = renderHook(useCreateUser);

    await expect(
      result.current.onSubmit({ password: 'asfjADASDlkj90909' }),
    ).rejects.toThrow(passwordValidationErrors.special);
  });

  it('Проверка выброса ошибки - ошибок нет', async () => {
    const { result } = renderHook(useCreateUser);

    await expect(
      result.current.onSubmit({ password: 'asfjADASDlkj9090№№9' }),
    ).resolves.toBe();
  });
})