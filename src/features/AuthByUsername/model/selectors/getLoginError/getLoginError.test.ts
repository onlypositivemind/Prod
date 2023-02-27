import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('selector getLoginError', () => {
    test('return error', () => {
        const state: DeepPartial<StateSchema> = { loginForm: { error: 'error' } };
        expect(getLoginError(state as StateSchema)).toBe('error');
    });

    test('with empty state', () => {
        const state = {};
        expect(getLoginError(state as StateSchema)).toBe(undefined);
    });
});
