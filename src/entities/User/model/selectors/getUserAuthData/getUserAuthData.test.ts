import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

const data = {
    id: '1',
    username: 'admin',
    password: '123',
};

describe('selector getUserAuthData', () => {
    test('should work with empty authData', () => {
        const state: DeepPartial<StateSchema> = { user: {} };

        expect(getUserAuthData(state as StateSchema)).toBe(undefined);
    });

    test('should work with authData', () => {
        const state: DeepPartial<StateSchema> = { user: { authData: data } };

        expect(getUserAuthData(state as StateSchema)).toEqual(data);
    });
});
