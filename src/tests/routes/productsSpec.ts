import supertest from 'supertest';
import app from '../../server';
import { User, Product } from '../../types/types';

const request = supertest(app);

describe('test products routes response', () => {
    /* ------------------------------------- get all products -------------------------------------- */
    it('expect get /products to get all products in db', async () => {
        const response = await request.get('/products');
        expect(response.body.products.length).toEqual(1);
        expect(response.status).toEqual(200);
    });

    /* ------------------------------------- get one product -------------------------------------- */
    it('expect get /products/:id to get one products from db by id', async () => {
        const response = await request.get('/products/1');
        expect(response.status).toEqual(200);
        expect(response.body.product.id).toEqual(1);
        expect(response.body.product.name).toEqual('Keyboard');
        expect(response.body.product.price).toEqual(25);
    });

    /* ------------------------------------- create a product -------------------------------------- */
    it('expect post /products to create a product', async () => {
        const fakeUser: User = {
            firstname: 'Ahmed',
            lastname: 'Youssef',
            password: '2192000',
        };
        const fakeProduct: Product = {
            name: 'mouse',
            price: 45,
        };
        const response = await request
            .post('/users/signin')
            .set('content-type', 'application/json')
            .send(fakeUser);
        const token = response.body.token;

        const response_1 = await request
            .post('/products')
            .set('content-type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(fakeProduct);
        expect(response_1.status).toEqual(201);
        expect(response_1.body.createdProduct.id).toEqual(2);
        expect(response_1.body.createdProduct.name).toEqual('mouse');
        expect(response_1.body.createdProduct.price).toEqual(45);
    });
});
