import { it, expect, describe, beforeEach } from 'vitest';
import { Stack } from '../../src/helpers/stack';

describe('Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('Метод push добавляет элемент в стек', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
  });

  it('Метод pop удаляет первый элемент из стека', () => {
    stack.push(1);
    stack.push(2);

    const poppedItem = stack.pop();

    expect(poppedItem).toBe(2);
    expect(stack.size()).toBe(1);
  });

  it('Метод pop выбросить исключение, если мы вызываем его на пустом стеке', () => {
    expect(() => stack.pop()).toThrow(/empty/i);
  });

  it('Метод peek выбросит исключение, если мы вызываем его на пустом стеке', () => {
    expect(() => stack.peek()).toThrow(/empty/i);
  });

  it('Метод peek возвращает последний элемент стека, при этом не удаляет его', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(5);

    const peekedItem = stack.peek();

    expect(peekedItem).toBe(5);
    expect(stack.size()).toBe(4);
  });

  it('Метод clear вызван на пустом стеке', () => {
    stack.clear();

    expect(stack.size()).toBe(0);
  });
});
