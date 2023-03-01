import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('selector getLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = { loginForm: { error: 'error' } };
        expect(getLoginError(state as StateSchema)).toBe('error');
    });

    test('should work with empty state', () => {
        const state = {};
        expect(getLoginError(state as StateSchema)).toBe(undefined);
    });
});
