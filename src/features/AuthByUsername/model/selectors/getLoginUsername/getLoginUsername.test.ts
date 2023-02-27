import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('selector getLoginUsername', () => {
    test('return value', () => {
        const state: DeepPartial<StateSchema> = { loginForm: { username: 'admin' } };
        expect(getLoginUsername(state as StateSchema)).toBe('admin');
    });

    test('with empty state', () => {
        const state = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
