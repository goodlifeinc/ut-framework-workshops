import { test, expect } from '@playwright/test';
import register from './common/register';

const BASE_URL = 'http://localhost:5000';
const username = `evgeni.atanasov+pw${Math.floor(Math.random() * (1000 - 1 + 1)) + 1}@softwaregroup.com`;
const password = 'Sg@12345';
const linkRx = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;
let activationLink = null;

test.use({
    ignoreHTTPSErrors: true
});
test.describe.configure({ mode: 'serial' });

test('register', async({ page }) => {
    await register({page}, {username, password, BASE_URL});

    const response = await page.waitForResponse(url => url.url().includes('rpc/bdb/user/selfAdd'));
    const body = await response.json();

    await expect(body?.result?.mail?.encryptedBody).toBeTruthy();
    activationLink = JSON.parse(body?.result?.mail?.encryptedBody).body.match(linkRx).pop();
    await expect(page.locator('.MuiAlert-message')).toHaveText(
        'Регистрацията беше успешна! Проверете имейла си, за да активирате профила си!'
    );

    // Click [aria-label="Close"]
    await page.locator('[aria-label="Close"]').click();

    expect(await page.screenshot()).toMatchSnapshot('register-page.png');
});

test('activate user', async({ page }) => {
    await page.goto(
        activationLink
    );
    const response = await page.waitForResponse(url => url.url().includes('rpc/bdb/user/activate'));
    const body = await response.json();

    await expect(body?.result?.success).toBeTruthy();
    await expect(page.locator('.MuiAlert-message')).toHaveText(
        'Профилът ви е успешно активиран! Можете да влезете в профила си!'
    );
});

test('login user', async({ page }) => {
    await page.goto(
        `${BASE_URL}/a/browser/publicPortal.html`
    );

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

    // Click [placeholder="example\@email\.com"]
    await page.locator('[placeholder="example\\@email\\.com"]').click();

    // Fill [placeholder="example\@email\.com"]
    await page.locator('[placeholder="example\\@email\\.com"]').fill(username);

    // Click [placeholder="Парола"]
    await page.locator('[placeholder="Парола"]').click();

    // Fill [placeholder="Парола"]
    await page.locator('[placeholder="Парола"]').fill(password);

    // Click button:has-text("Регистрация")
    await page.locator('button:has-text("Вход")').click();

    const response = await page.waitForResponse(url => url.url().includes('rpc/login/identity/check'));

    await expect(response.ok()).toBeTruthy();
    await expect(page.locator('.MuiAlert-message')).toHaveText(
        'Влязохте успешно!'
    );

    await expect(page).toHaveURL(
        `${BASE_URL}/a/browser/publicPortal.html#/dashboard/home`
    );
});

test('register username already registered', async({ page }) => {
    await register({page}, {username, password, BASE_URL});

    await expect(page.locator('.MuiAlert-message')).toHaveText(
        'Потребител с такъв имейл вече е регистриран!'
    );

    // Click [aria-label="Close"]
    await page.locator('[aria-label="Close"]').click();
});
