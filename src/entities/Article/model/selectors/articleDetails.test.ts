import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';

describe('selectors articleDetails', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            subtitle: 'subtitle',
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: { data },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state data', () => {
        const state = {};
        expect(getArticleDetailsData(state as StateSchema)).toBe(undefined);
    });

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { isLoading: true },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state isLoading', () => {
        const state = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { error: 'error' },
        };
        expect(getArticleDetailsError(state as StateSchema)).toBe('error');
    });

    test('should work with empty state error', () => {
        const state = {};
        expect(getArticleDetailsError(state as StateSchema)).toBe(undefined);
    });
});
