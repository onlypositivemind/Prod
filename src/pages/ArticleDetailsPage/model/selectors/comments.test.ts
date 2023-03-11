import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments';

describe('selectors ArticleDetailsPage/comments', () => {
    test('should work with empty state error', () => {
        const state = {};
        expect(getArticleCommentsError(state as StateSchema)).toBe(undefined);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: { error: 'error' },
        };
        expect(getArticleCommentsError(state as StateSchema)).toBe('error');
    });

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: { isLoading: true },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state isLoading', () => {
        const state = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(false);
    });
});
