/// <reference types="vitest" />

import { defineConfig, coverageConfigDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    coverage: {
      exclude: [
        'src/constants/**/*.ts',
        'src/types/**/*.ts',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
