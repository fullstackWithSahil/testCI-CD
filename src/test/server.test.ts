import request from 'supertest';
import { app, server } from '../server'; // Adjust the path to your server file

afterAll((done) => {
  server.close(done);
});

describe('GET /api/hello', () => {
  it('should return 200 OK with the message "Hello"', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello' });
  });
});