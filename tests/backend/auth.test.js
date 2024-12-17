const request = require('supertest');
const app = require('../../server'); // Your Express app
const User = require('../models/User'); // Your User model

describe('Auth API', () => {
    beforeAll(async () => {
        await User.deleteMany(); // Clear users before testing
    });

    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/auth/signup')
            .send({ email: 'test@example.com', password: 'password123' });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('message', 'User registered successfully');
    });

    it('should login an existing user', async () => {
        await User.create({ email: 'test@example.com', password: 'password123' });

        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: 'test@example.com', password: 'password123' });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
    });

    it('should not login with invalid credentials', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: 'wrong@example.com', password: 'wrongpassword' });

        expect(res.statusCode).toBe(401);
        expect(res.body).toHaveProperty('error', 'Invalid credentials');
    });
});
