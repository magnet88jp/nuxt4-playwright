import { test, expect } from '@nuxt/test-utils/playwright'

test.describe('home page', () => {
  test('renders welcome screen', async ({ page, goto }) => {
    await goto('/')

    await expect(page).toHaveTitle(/Nuxt/i)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Button' })).toBeVisible()
  })
})
