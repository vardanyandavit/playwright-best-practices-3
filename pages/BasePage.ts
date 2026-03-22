import { expect, type Page } from '@playwright/test';

function ensureLeadingSlash(route: string): string {
  return route.startsWith('/') ? route : `/${route}`;
}

export abstract class BasePage {
  private readonly page: Page;
  private readonly route: string;

  protected constructor(page: Page, route: string) {
    this.page = page;
    this.route = ensureLeadingSlash(route);
  }

  async visit(): Promise<void> {
    await this.page.goto(this.route);
  }

  async waitForUrl(customUrl?: string) {
    const urlToWaitFor = customUrl || this.route;
    await this.page.waitForURL(`**${urlToWaitFor}**`, { waitUntil: "domcontentloaded", timeout: 40000 });
  }

  async reloadPage(): Promise<void> {
    await this.page.reload();
    await this.waitForUrl();
  }


}
