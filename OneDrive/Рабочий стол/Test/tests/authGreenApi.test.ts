import { Builder, By, until } from 'selenium-webdriver';
import * as readlineSync from 'readline-sync';

jest.setTimeout(60000);

describe('Green API 2FA login', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('login with email and 2FA code', async () => {
        await driver.get('https://console.green-api.com/auth');

        // Ввод email
        const emailInput = await driver.wait(until.elementLocated(By.id('login')), 10000);
        await emailInput.sendKeys('mautovaalina34@gmail.com');

        const loginButton = await driver.findElement(By.css('button.loginButton'));
        await loginButton.click();

        // Ждём появления поля для кода подтверждения
        const codeInput = await driver.wait(until.elementLocated(By.id('confirm_registration_code')), 30000);

        // Запрашиваем ввод кода в терминале
        const code = readlineSync.question('Введите код подтверждения из письма: ');

        await codeInput.sendKeys(code);

        // Нажимаем кнопку "Отправить"
        const submitButton = await driver.findElement(By.css('button.ant-btn-primary'));
        await submitButton.click();

        // Здесь можно добавить ожидание успешного входа (например, появление какого-то элемента)
    }, 60000);
});
