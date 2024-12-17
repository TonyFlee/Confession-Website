const request = require('supertest');
const app = require('../../server'); // Your Express app
const Confession = require('../models/Confession'); // Your Confession model

describe('Confession API', () => {
    beforeAll(async () => {
        await Confession.deleteMany(); // Clear confessions before testing
    });

    it('should create a new confession', async () => {
        const res = await request(app)
            .post('/api/confessions')
            .send({ text: 'This is a test confession' });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('text', 'This is a test confession');
    });

    it('should fetch all confessions', async () => {
        await Confession.create({ text: 'Another confession' });

        const res = await request(app).get('/api/confessions');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
