import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('selector getProfileError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: 'error' },
        };
        expect(getProfileError(state as StateSchema)).toBe('error');
    });

    test('should work with empty state', () => {
        const state = {};
        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});
