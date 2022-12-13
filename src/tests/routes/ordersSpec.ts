import supertest from 'supertest';
import app from '../../server';
import { User, Order, Order_products } from '../../types/types';

const request = supertest(app);

describe('test orders routes response', () => {
    let token: string;
    beforeAll(async () => {
        const fakeUser: User = {
            firstname: 'Ahmed',
            lastname: 'Youssef',
            password: '2192000',
        };
        const response = await request
            .post('/users/signin')
            .set('content-type', 'application/json')
            .send(fakeUser);
        token = response.body.token;
    });
    /* ---------------------------------------------------- get current orders by user --------------------------------------- */
    it('expect get /orders endpoint to get all orders maked by the user', async () => {
        const response = await request
            .get('/orders')
            .set('content-type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({ user_id: 1 });
        expect(response.body.orders.length).toEqual(1);
    });

    /* ---------------------------------------------------- get current orders by user --------------------------------------- */
    const fakeOrder: Order = {
        status: 'active',
        user_id: 1,
    };
    it('expect post /ordres endpoint to create an order', async () => {
        const response = await request
            .post('/orders')
            .set('content-type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(fakeOrder);

        expect(response.status).toEqual(201);
        expect(response.body.createdOrder.status).toEqual('active');
        expect(response.body.createdOrder.id).toEqual(2);
        expect(response.body.createdOrder.user_id).toEqual(1);
    });

    /* ---------------------------------------------------- add products to orders --------------------------------------- */
    const fakeOrderProducts: Order_products = {
        quantity: 5,
        product_id: 1,
    };

    it('expect post /orders/:orderId/products to add products to the order', async () => {
        const response = await request
            .post('/orders/2/products')
            .set('content-type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(fakeOrderProducts);
        expect(response.status).toEqual(200);
        expect(response.body.order_products.quantity).toEqual(5);
    });
});
