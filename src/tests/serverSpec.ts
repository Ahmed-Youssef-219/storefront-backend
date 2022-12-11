import supertest from 'supertest';
import app from '../server';

const request = supertest(app);
describe('test the server / endpoint', () => {
    it('expect to get response state equal to 200 from / end point', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
    });
});

/* const x = 25;

describe('the first test in the project :)', () => {
    it('varible x must be equal to 25', () => {
        expect(x).toEqual(25);
    });
}); */
