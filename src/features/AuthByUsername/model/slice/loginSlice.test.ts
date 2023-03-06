import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = { username: 'Username' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('New username'),
        )).toEqual({ username: 'New username' });
    });

    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = { username: 'pass' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('New_pass'),
        )).toEqual({ username: 'New_pass' });
    });
});
