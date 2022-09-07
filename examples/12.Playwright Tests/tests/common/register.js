import { expect } from '@playwright/test';

export default async({ page }, { username, password, BASE_URL }) => {
    // Go to BASE_URL/a/browser/publicPortal.html
    await page.goto(
        `${BASE_URL}/a/browser/publicPortal.html`
    );

    // Go to BASE_URL/a/browser/publicPortal.html#/
    await page.goto(
        `${BASE_URL}/a/browser/publicPortal.html#/`
    );

    // Click text=Приемете
    await page.locator('text=Приемете').click();

    // Click span:has-text("Вход")
    await page.locator('span:has-text("Вход")').click();
    await expect(page).toHaveURL(
        `${BASE_URL}/a/browser/publicPortal.html#/sign-in`
    );

    // Click text=Регистрация
    await page.locator('text=Регистрация').click();
    await expect(page).toHaveURL(
        `${BASE_URL}/a/browser/publicPortal.html#/sign-up`
    );

    // Click [placeholder="example\@email\.com"]
    await page.locator('[placeholder="example\\@email\\.com"]').click();

    // Fill [placeholder="example\@email\.com"]
    await page.locator('[placeholder="example\\@email\\.com"]').fill(username);

    // Press Tab
    await page.locator('[placeholder="example\\@email\\.com"]').press('Tab');

    // Click [placeholder="Име"]
    await page.locator('[placeholder="Име"]').click();

    // Fill [placeholder="Име"]
    await page.locator('[placeholder="Име"]').fill('Evgeni');

    // Click [placeholder="Фамилия"]
    await page.locator('[placeholder="Фамилия"]').click();

    // Fill [placeholder="Фамилия"]
    await page.locator('[placeholder="Фамилия"]').fill('Atanasov');

    // Click [placeholder="Телефонен номер"]
    await page.locator('[placeholder="Телефонен номер"]').click();

    // Fill [placeholder="Телефонен номер"]
    await page.locator('[placeholder="Телефонен номер"]').fill('0885860610');

    // Click [placeholder="Парола"]
    await page.locator('[placeholder="Парола"]').click();

    // Fill [placeholder="Парола"]
    await page.locator('[placeholder="Парола"]').fill(password);

    // Check input[name="termsOfUse"]
    await page.locator('input[name="termsOfUse"]').check();

    // Check input[name="privacyPolicy"]
    await page.locator('input[name="privacyPolicy"]').check();

    // Click button:has-text("Регистрация")
    await page.locator('button:has-text("Регистрация")').click();
};
