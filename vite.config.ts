import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import { sveltekit } from '@sveltejs/kit/vite'

const config = defineConfig({
  plugins: [sveltekit()],

  test: {
    expect: { requireAssertions: true },

    projects: [
      {
        extends: './vite.config.ts',

        test: {
          name: 'client',

          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: 'chromium', headless: true }],
          },

          include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
          exclude: ['src/lib/server/**'],
        },
      },

      {
        extends: './vite.config.ts',

        test: {
          name: 'server',
          environment: 'node',
          include: ['src/**/*.{test,spec}.{js,ts}'],
          exclude: ['src/**/*.svelte.{test,spec}.{js,ts}'],
        },
      },
    ],
  },
})
if (process.env.BACKEND_URL) {
  config.server = {
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL,
        changeOrigin: true,
      },
    },
  }
}

export default config
