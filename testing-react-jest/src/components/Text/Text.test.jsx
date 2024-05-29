import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('<Text />', () => {
  const text = 'Тестовая строка';

  it('Компонент отображается на странице', () => {
    render(<Text>{text}</Text>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('Компонент имеет нужный тег', () => {
    const { container } = render(<Text>{text}</Text>);

    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('Компонент имеет определенный класс', () => {
    const cnSelector = 'test';
    const cnDefault = 'text';

    render(<Text className={cnSelector}>{text}</Text>);

    const el = screen.getByText(text);

    expect(el).toBeInTheDocument();
    expect(el).toHaveClass(cnSelector);
    expect(el).toHaveClass(cnDefault);
  });

  it('Компонент имеет класс success если передает true isSuccess', () => {
    render(<Text isSuccess>{text}</Text>);

    const el = screen.getByText(text);

    expect(el).toHaveClass('success');
  });

  it('Компонент имеет класс success если передает true isError', () => {
    render(<Text isError>{text}</Text>);

    const el = screen.getByText(text);

    expect(el).toHaveClass('error');
  });
});
