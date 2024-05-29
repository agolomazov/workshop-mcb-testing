import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('<Title />', () => {
  const text = 'Hello, world';

  it('Должен показаться заголовок на странице', () => {
    render(<Title>{text}</Title>);

    expect(screen.queryByText(text)).toBeInTheDocument();
  });

  it('Проверка корректности тега при рендере', () => {
    const { container } = render(<Title level={2}>{text}</Title>);

    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  it('Проверка правильности указания css-класса', () => {
    render(
      <Title level={2} className="test">
        {text}
      </Title>,
    );

    const el = screen.queryByText(text);

    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('test');
    expect(el).toHaveAttribute('class', 'title test');
    expect(el).toHaveClass('title');
  });
});
