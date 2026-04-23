import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import { sveltekit } from '@sveltejs/kit/vite'

const supportsPlaywright = process.platform !== 'freebsd'

const config = defineConfig({
  plugins: [sveltekit()],

  test: {
    expect: { requireAssertions: true },

    projects: [
      ...(supportsPlaywright
        ? [
            {
              extends: './vite.config.ts',

              test: {
                name: 'client',

                browser: {
                  enabled: true,
                  provider: playwright(),
                  instances: [{ browser: 'chromium' as const, headless: true }],
                },

                include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
                exclude: ['src/lib/server/**'],
              },
            },
          ]
        : []),

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
