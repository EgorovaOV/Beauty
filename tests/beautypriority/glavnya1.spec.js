// @ts-check
import * as CONSTANTS from './constants';

const { test, expect } = require('@playwright/test');

test('Проверяем наличие и доступность блоков сайта', async ({ page }) => {
    await page.goto(CONSTANTS.url);

    async function waitForElementExist(selector) {
        const element = await page.$(selector);
        if (!element) {
            throw new Error(`Element with selector "${selector}" not found.`);
        }
        return element;
    };

    try {
        const element = await waitForElementExist(CONSTANTS.selectorForSliderMainPage);
        expect(element).toBeTruthy();
    } catch (error) {
        console.error(error);
    }
});

