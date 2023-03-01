import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('selector getLoginIsLoading', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = { loginForm: { isLoading: true } };
        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state = {};
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});
