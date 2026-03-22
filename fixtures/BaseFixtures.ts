import { test as base } from '@playwright/test';


type PageFixtures = {
  homePage: HomePage;
};

export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export { expect, Page } from "@playwright/test";
