import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './Form';

describe('<Form />', () => {
  const renderComponent = () => {
    const onSubmit = jest.fn();
    const onError = jest.fn();
    const onSuccess = jest.fn();

    const { container } = render(
      <Form
        onSubmit={onSubmit}
        onError={onError}
        onSuccess={onSuccess}
        className="userForm"
      >
        <div data-testid="my-child">Some</div>
      </Form>,
    );

    return {
      onError,
      onSuccess,
      onSubmit,
      container,
    };
  };

  it('Форма отрисована на странице', () => {
    renderComponent();

    const testIdEl = screen.getByTestId('my-child');

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(testIdEl).toBeInTheDocument();
  });

  it('Проверка отправки формы', async () => {
    const { container, onSubmit } = renderComponent();

    const formEl = container.querySelector('form');

    expect(formEl).toBeInTheDocument();

    await fireEvent.submit(formEl);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('Проверка отработки метода onSuccess', async () => {
    const { container, onSuccess } = renderComponent();

    const formEl = container.querySelector('form');

    expect(formEl).toBeInTheDocument();

    await fireEvent.submit(formEl);

    expect(onSuccess).toHaveBeenCalledTimes(1);
  });

  it('Проверка отработки метода onError в случае ошибки на onSubmit', async () => {
    const onSubmit = jest.fn().mockRejectedValue();
    const onError = jest.fn();
    const onSuccess = jest.fn();

    const { container } = render(
      <Form
        onSubmit={onSubmit}
        onError={onError}
        onSuccess={onSuccess}
        className="userForm"
      >
        <div data-testid="my-child">Some</div>
      </Form>,
    );

    const formEl = container.querySelector('form');

    await fireEvent.submit(formEl);

    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onError).toHaveBeenCalledTimes(1);
  });
});
