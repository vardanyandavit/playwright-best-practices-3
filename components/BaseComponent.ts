import { Page, Locator } from '@playwright/test';

export class BaseComponent {
  protected page: Page;
  protected rootLocator: Locator;

  constructor(page: Page, rootLocator: Locator) {
    this.page = page;
    this.rootLocator = rootLocator;
  }
}
