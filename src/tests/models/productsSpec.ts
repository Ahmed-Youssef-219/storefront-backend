import ProductSchema from '../../models/products';
import { Product } from '../../types/types';

const ProductSc = new ProductSchema();

describe('Test products model functions definitions', () => {
    it('expect products model to have function called index', () => {
        expect(ProductSc.index).toBeDefined();
    });
    it('expect products model to have function called show', () => {
        expect(ProductSc.show).toBeDefined();
    });
    it('expect products model to have function called create', () => {
        expect(ProductSc.create).toBeDefined();
    });
    it('expect products model to have function called delete', () => {
        expect(ProductSc.delete).toBeDefined();
    });

    it('expect create method to add a product to DB', async () => {
        const fakeProduct: Product = {
            name: 'Keyboard',
            price: 25,
        };
        const result = await ProductSc.create(fakeProduct);
        expect(result.name).toEqual('Keyboard');
        expect(result.price).toEqual(25);
        expect(result.id).toEqual(1);
    });
    it('expect index method to get all products from DB', async () => {
        const result = await ProductSc.index();
        expect(result.length).toEqual(1);
    });
    it('expect show method to get one product from DB', async () => {
        const result = await ProductSc.show(1);
        expect(result.id).toEqual(1);
        expect(result.name).toEqual('Keyboard');
        expect(result.price).toEqual(25);
    });
});
