import ProductSchema from '../../models/products';

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
});