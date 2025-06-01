import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    instanceId: process.env.INSTANCE_ID || '',
    apiToken: process.env.API_TOKEN || '',
    phone: process.env.PHONE || '',
    baseUrl: process.env.BASE_URL || 'https://api.green-api.com',
    webUrl: 'https://console.green-api.com/auth',
    login: 'mautovaalina34@gmail.com',
    password: 'your_password',
};
