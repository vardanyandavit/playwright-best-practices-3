import { Page } from "../fixtures/BaseFixtures";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    public constructor(page: Page) {
        super(page, "/")
    }
}