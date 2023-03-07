import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { userReducer, userActions } from './userSlice';
import { UserSchema } from '../types/user';

const data = {
    id: '1',
    username: 'admin',
    password: '123',
};

jest.spyOn(Storage.prototype, 'getItem');

describe('userSlice', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('setAuthData', () => {
        const state: DeepPartial<UserSchema> = {};

        expect(userReducer(
            state as UserSchema,
            userActions.setAuthData(data),
        )).toEqual({ authData: data });
    });

    test('logout', () => {
        const state: DeepPartial<UserSchema> = { authData: data };

        expect(userReducer(
            state as UserSchema,
            userActions.logout(),
        )).toEqual({ authData: undefined });
    });

    test('initAuthData with data in localstorage', () => {
        const state: DeepPartial<UserSchema> = { _inited: false };
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));

        expect(userReducer(
            state as UserSchema,
            userActions.initAuthData(),
        )).toEqual({ _inited: true, authData: data });
    });

    test('initAuthData without data in localstorage', () => {
        const state: DeepPartial<UserSchema> = { _inited: false };

        expect(userReducer(
            state as UserSchema,
            userActions.initAuthData(),
        )).toEqual({ _inited: true });
    });
});
