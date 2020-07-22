import req from 'supertest';
import server from '../src/server';

describe('server', () => {
  it('[GET] /', async () => {
    const res = await req(server).get('/');
    expect(res.text).toBe('Hello ts-node!');
  });
});
