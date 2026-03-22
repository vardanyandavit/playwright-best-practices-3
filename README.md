# Playwright Best Practices

## Project Structure

```text
playwright-best-practices-3/
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD with test sharding
├── components/
│   └── BaseComponent.ts            # Base class for UI components
├── enums/
│   ├── selectors/
│   │   ├── commonSelectors.ts      # Common locators
│   │   └── modalSelectors.ts       # Modal locators
│   └── global.ts                   # Global enumerations
├── fixtures/
│   └── BaseFixtures.ts             # Enhanced fixtures for tests
├── pages/
│   ├── BasePage.ts                 # Base page object model
│   └── HomePage.ts                 # Example page object
├── test-data/
│   ├── constants/
│   │   └── Routes.ts               # URL routes constants
│   └── jsons/
│       └── users.json              # Test data users
├── tests/
│   └── example.spec.ts             # Example Playwright test
├── utils/
│   └── BaseHelpers.ts              # Reusable helper utilities
├── .env                            # Local environment variables
├── .env.example                    # Template for environment variables
├── .gitignore                      # Git ignored files
├── global-setup.ts                 # Script to run before all tests
├── global-teardown.ts              # Script to run after all tests
├── package-lock.json               # NPM package lock
├── package.json                    # Project dependencies and scripts
├── playwright.config.ts            # Playwright configuration
├── README.md                       # Project documentation
└── tsconfig.json                   # TypeScript configuration
```
