import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

import * as waitMock from './helpers/wait';

const waitSpy = jest.spyOn(waitMock, 'wait');
const promise = Promise.resolve();

describe('<App />', () => {
  const renderComponent = () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    const appEl = screen.getByTestId('app');
    const headingPage = screen.getByRole('heading');
    const formPage = screen.getByRole('form');
    const inputName = screen.getByRole('textbox', { name: /name/i });
    const inputPassword = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByRole('button', { name: /create user/i });

    return {
      headingPage,
      formPage,
      user,
      inputName,
      inputPassword,
      container,
      submitBtn,
      appEl,
    };
  };

  it('Будет отображен заголовок и форма на странице', () => {
    const { headingPage, formPage, appEl } = renderComponent();

    expect(appEl).toBeInTheDocument();
    expect(headingPage).toBeInTheDocument();
    expect(headingPage.textContent).toMatch(/create user/i);
    expect(formPage).toBeInTheDocument();
  });

  it('Будет отображен errorMessage если мы нажимаем submit и вводим слабый пароль', async () => {
    const { user, submitBtn } = renderComponent();

    await user.click(submitBtn);

    const errorMessage = screen.queryByText(/8 characters long/i);

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('error');
    expect(errorMessage.textContent).toMatchSnapshot();
  });

  it('Будет отображен successMessage если мы нажимаем submit и вводим валидные данные', async () => {
    waitSpy.mockImplementationOnce(() => promise);
    const { user, submitBtn, inputName, inputPassword } = renderComponent();

    await user.type(inputName, 'Anton');
    await user.type(inputPassword, '11aaAA##!23');
    await user.click(submitBtn);

    const successMessage = await screen.findByText(/created with password/i);

    expect(successMessage).toBeInTheDocument();
    expect(successMessage.textContent).toMatchSnapshot();
    expect(successMessage).toHaveClass('success');
  });
});
