import OrderSchema from '../../models/orders';

const orderSc = new OrderSchema();

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
});