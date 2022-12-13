import OrderSchema from '../../models/orders';
import UserSchema from '../../models/users';


const userSc = new UserSchema();
const orderSc = new OrderSchema();
import { Order,User } from '../../types/types';

describe('Test orders model functions definitions', () => {
    it('expect orders model to have function called index', () => {
        expect(orderSc.index).toBeDefined();
    });
    it('expect orders model to have function called create', () => {
        expect(orderSc.create).toBeDefined();
    });
    it('expect orders model to have function called delete', () => {
        expect(orderSc.delete).toBeDefined();
    });
    it('expect orders model to have function called addProducts', () => {
        expect(orderSc.addProducts).toBeDefined();
    });
    it('expect orders model to have function called showProducts', () => {
        expect(orderSc.showProducts).toBeDefined();
    });
    let user: User ;
    const fakeUser:User = {
        firstname:'Ahmed',
        lastname:'Youssef',
        password:'2192000'
    }
    
    beforeAll( async () => {
    user = await userSc.create(fakeUser);
    });

   

    it('expect create method to create order maked by user',async () => {
        
        const fakeOrder:Order = {
            status: 'active',
            user_id: 1
        }
        
        const result = await orderSc.create(fakeOrder);
        expect(result.id).toEqual(1);
        expect(result.status).toEqual('active');
        expect(result.user_id).toEqual(user.id);
    });

    it('expect inext method to get all orders maked by user', async () => {
        const result = await orderSc.index(1);
        expect(result.length).toEqual(1);
        expect(result[0].id).toEqual(1)
        expect(result[0].status).toEqual('active');
        expect(result[0].user_id).toEqual(1);
    });

});