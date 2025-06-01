import { getChatHistory, getStateInstance } from '../src/api';
import { config } from '../src/config';

describe('Green API WhatsApp getChatHistory', () => {
    it('Instance should be authorized', async () => {
        const response = await getStateInstance();
        expect(response.status).toBe(200);
        expect(response.data.stateInstance).toBe('authorized');
    });

    it('should get chat history successfully', async () => {
        const response = await getChatHistory(config.phone, 5);
        console.log('getChatHistory response:', response.data);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
        expect(response.data[0]).toHaveProperty('idMessage');
    });


    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    it('should fail if required fields missing', async () => {
        await delay(1000);  // Ждем секунду перед запросом
        try {
            await getChatHistory('');
        } catch (error: any) {
            expect(error.response.status).toBe(400);
        }
    });

});
