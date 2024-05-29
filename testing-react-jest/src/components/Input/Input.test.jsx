import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('<Input />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () => {
    const onChange = jest.fn();
    const { container } = render(
      <Input
        name="user"
        label="User"
        onChange={onChange}
        placeholder="User..."
        containerClassName="userControl"
        inputClassName="userInput"
      />,
    );

    const inputEl = screen.getByRole('textbox', { name: /user/i });
    const labelEl = screen.getByText('User');
    const user = userEvent.setup();

    return {
      onChange,
      inputEl,
      container,
      labelEl,
      user,
    };
  };

  it('Input добавлен на страницу', () => {
    const { inputEl } = renderComponent();

    expect(inputEl).toBeInTheDocument();
  });

  it('Переданные классы присутствуют в DOM', () => {
    const { container } = renderComponent();

    expect(container.querySelector('.userControl')).toBeInTheDocument();
    expect(container.querySelector('.userInput')).toBeInTheDocument();
  });

  it('Label добавлен в разметку', () => {
    const { labelEl } = renderComponent();

    expect(labelEl).toBeInTheDocument();
  });

  it('Клик по label наводит фокус на input', async () => {
    const { inputEl, labelEl } = renderComponent();
    const user = userEvent.setup();

    await user.click(labelEl);

    expect(inputEl).toHaveFocus();
  });

  it('После ввода в инпут значения будет вызван onChange метод', async () => {
    const testText = 'anton';
    const { inputEl, onChange, user } = renderComponent();

    await user.type(inputEl, testText);

    expect(onChange).toHaveBeenCalledTimes(testText.length);
  });

  it('Будет ли отрисован чекбокс и проверен статус', async () => {
    const onChange = jest.fn();
    render(<Input type="checkbox" label="Set user role" onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');
    const user = userEvent.setup();

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);

    await user.click(checkbox);

    expect(checkbox.checked).toBe(true);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
