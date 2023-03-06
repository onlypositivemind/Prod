import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('selector getProfileIsLoading', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: true },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state = {};
        expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
    });
});
