import axios from 'axios';
import { config } from './config';

const baseUrl = config.baseUrl;

export async function sendMessage(phone: string, message: string) {
    return axios.post(
        `${baseUrl}/waInstance${config.instanceId}/sendMessage/${config.apiToken}`,
        {
            chatId: `${phone}@c.us`,
            message,
        }
    );
}

export async function getChatHistory(phone: string, count = 10) {
    return axios.post(
        `${baseUrl}/waInstance${config.instanceId}/getChatHistory/${config.apiToken}`,
        {
            chatId: `${phone}@c.us`,
            count,
        }
    );
}

export async function getStateInstance() {
    return axios.get(
        `${baseUrl}/waInstance${config.instanceId}/getStateInstance/${config.apiToken}`
    );
}
