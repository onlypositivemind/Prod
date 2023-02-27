import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('selector getLoginIsLoading', () => {
    test('return true', () => {
        const state: DeepPartial<StateSchema> = { loginForm: { isLoading: true } };
        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });

    test('with empty state', () => {
        const state = {};
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});
