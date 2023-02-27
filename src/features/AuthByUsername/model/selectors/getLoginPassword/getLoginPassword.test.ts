import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('selector getLoginPassword', () => {
    test('return value', () => {
        const state: DeepPartial<StateSchema> = { loginForm: { password: 'Pass123!@' } };
        expect(getLoginPassword(state as StateSchema)).toBe('Pass123!@');
    });

    test('with empty state', () => {
        const state = {};
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
