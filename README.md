# Инструкция по запуску автотестов

## Требования
- Node.js (версия XX или выше)
- npm

## Установка
```bash
git clone https://github.com/AlinaMautova/autotests.git
cd autotests
npm install
```
## Настройка
```Создать файл .env в корне проекта и заполнить:
INSTANCE_ID=your_instance_id
API_TOKEN=your_api_token
PHONE_NUMBER=your_phone_number
```
## Запуск тестов
```bash
npm test
```
## Запрашиваем ввод кода в терминале, надо будет ввести для авторизации который отправлен на почту
```bash
const code = readlineSync.question('Введите код подтверждения из письма: ');
await codeInput.sendKeys(code);
```

