import { sendMessage, getStateInstance } from '../src/api';
import { config } from '../src/config';

describe('Green API WhatsApp sendMessage', () => {
    it('Instance should be authorized', async () => {
        const response = await getStateInstance();
        console.log('getStateInstance response:', response.data);
        expect(response.status).toBe(200);
        expect(response.data.stateInstance).toBe('authorized');
    });

    it('should send a message successfully', async () => {
        const response = await sendMessage(config.phone, 'Test message from Jest');
        console.log('sendMessage response:', response.data);
        expect(response.status).toBe(200);
        expect(response.data.idMessage).toBeDefined();
    });

    it('should fail if required fields missing', async () => {
        try {
            await sendMessage('', '');
        } catch (error: any) {
            expect(error.response.status).toBe(400);
        }
    });
});
