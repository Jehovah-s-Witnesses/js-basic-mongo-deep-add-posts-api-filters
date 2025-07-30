import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    benchmark: {},
    setupFiles: ['.vitest/localSetup.js'],
  },
});
