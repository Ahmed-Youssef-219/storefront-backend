import UserSchema from '../../models/users';

const userSc = new UserSchema();

describe('Test users model functions definitions', () => {
    it('expect users model to have function called index', () => {
        expect(userSc.index).toBeDefined();
    });
    it('expect users model to have function called show', () => {
        expect(userSc.show).toBeDefined();
    });
    it('expect users model to have function called create', () => {
        expect(userSc.create).toBeDefined();
    });
    it('expect users model to have function called signin', () => {
        expect(userSc.signIn).toBeDefined();
    });
    it('expect users model to have function called delete', () => {
        expect(userSc.delete).toBeDefined();
    });
});
