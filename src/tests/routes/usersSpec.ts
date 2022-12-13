import supertest from 'supertest';
import app from '../../server';
import { User } from '../../types/types';

const request = supertest(app);
describe('test users routes response', () => {
    const fakeUser: User = {
        firstname: 'mahmoud',
        lastname: 'yehia',
        password: '932002',
    };

    /* ------------------------------------- create route -------------------------------------- */
    it('expect post /users endpoint to create a user', async () => {
        const response = await request
            .post('/users')
            .set('content-type', 'application/json')
            .send(fakeUser);

        expect(response.body.createdUser.firstname).toEqual('mahmoud');
        expect(response.body.createdUser.lastname).toEqual('yehia');
        expect(response.body.createdUser.id).toEqual(3);
    });

    /* ------------------------------------- signin route -------------------------------------- */
    let token: string;
    it('expect post /users/signin endpoint to return a token for authentication', async () => {
        const response = await request
            .post('/users/signin')
            .set('content-type', 'application/json')
            .send(fakeUser);

        expect(response.body.firstname).toEqual('mahmoud');
        expect(response.body.lastname).toEqual('yehia');

        token = response.body.token;
    });

    /* ------------------------------------- get route for all users -------------------------------------- */
    it('expect get /users endpoint to get all users', async () => {
        const response = await request
            .get('/users')
            .set('Authorization', `Bearer ${token}`);
        expect(response.body.users.length).toEqual(3);
    });
    /* ------------------------------------- get route for one user -------------------------------------- */
    it('expect get /users/:id endpoint to get user by id', async () => {
        const response = await request
            .get('/users/3')
            .set('Authorization', `Bearer ${token}`);
        expect(response.body.user.firstname).toEqual('mahmoud');
        expect(response.body.user.lastname).toEqual('yehia');
        expect(response.body.user.id).toEqual(3);
    });
});
