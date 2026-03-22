import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  // Global teardown logic here
  console.log('Global teardown executed');
}

export default globalTeardown;
