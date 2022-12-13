import UserSchema from '../../models/users';
import { User } from '../../types/types';

const userSc = new UserSchema();


describe('Test users model functions', () => {
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

    it('expect create method to add a user to DB', async () => {
        const fakeUser:User = {
            firstname:'Ahmed',
            lastname:'Youssef',
            password:'2192000'
        }
        const result= await userSc.create(fakeUser);
        expect(result.firstname).toEqual('Ahmed');
        expect(result.lastname).toEqual('Youssef');
        expect(result.id).toEqual(2);
    });
    it('expect index method to get all users from DB', async () => {
        const result = await userSc.index();
        expect(result.length).toEqual(2);
    });
    it('expect show method to get one user from DB', async () => {
        const result = await userSc.show(1);
        expect(result.id).toEqual(1);
        expect(result.firstname).toEqual("Ahmed");
        expect(result.lastname).toEqual("Youssef");
    });
});
