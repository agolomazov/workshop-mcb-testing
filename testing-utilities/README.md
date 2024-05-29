# Workshop по тестированию Frontend

### Установка зависимостей

```sh
### Устанавливаем базовое Vite приложение с Typescript
npm create vite@latest

### Заходим в папку с проектом и устанавливаем зависимости
npm install

### Устанавливаем vitest
npm install -D vitest
```

### Настройка тестового покрытия

```sh
### Установка пакета для визуализации тестового покрытия
npm i -D @vitest/coverage-v8
```

Добавляем настройки в `vites.config.ts`

```ts
/// <reference types="vitest" />

import { defineConfig, coverageConfigDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        'src/constants/**/*.ts',
        'src/types/**/*.ts',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
```

### Запуск тестов

```sh
### Запуск тестов
npm t

### Запуск тестов в режиме watch
npm run test:watch

### Получение данных о тестовом покрытии
npm run coverage
```

```ts
// Мокаем реализацию функции
const mockedFn = vi.fn(() => 'result');

// Какая-то логика тестирования

expect(mockedFn).toBeCalledTimes(1);
```
