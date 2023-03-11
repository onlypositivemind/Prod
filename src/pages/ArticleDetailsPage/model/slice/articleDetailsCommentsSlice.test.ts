import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

describe('articleDetailsSlice', () => {
    test('fetchCommentsByArticleId.pending', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: 'error',
        };

        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('fetchCommentsByArticleId.rejected', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: true,
            error: undefined,
        };

        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.rejected,
        )).toEqual({
            isLoading: false,
        });
    });
});
