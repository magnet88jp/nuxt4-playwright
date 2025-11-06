import { defineConfig } from '@playwright/test'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  testDir: fileURLToPath(new URL('./tests/e2e', import.meta.url)),
  fullyParallel: true,
  reporter: process.env.CI ? 'github' : 'list',
  retries: process.env.CI ? 2 : 0,
  use: {
    // Boot Nuxt in-process for each worker using project root
    nuxt: {
      rootDir: fileURLToPath(new URL('.', import.meta.url)),
    },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    timezoneId: 'UTC',
  },
  workers: process.env.CI ? 2 : undefined,
})
