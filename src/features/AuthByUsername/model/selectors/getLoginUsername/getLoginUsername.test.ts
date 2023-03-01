import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('selector getLoginUsername', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = { loginForm: { username: 'admin' } };
        expect(getLoginUsername(state as StateSchema)).toBe('admin');
    });

    test('should work with empty state', () => {
        const state = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
