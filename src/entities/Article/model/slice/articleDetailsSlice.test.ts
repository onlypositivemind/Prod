import { Article, ArticleDetailsSchema } from 'entities/Article';
import { ArticleBlockType, ArticleFilter } from 'entities/Article/model/types/article';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const article: Article = {
    id: '1',
    title: 'JavaScript',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://blog.logrocket.com/wp-content/uploads/2022/07/guide-promises-node-js-nocdn.png',
    views: 2002,
    createdAt: '29.09.2022',
    user: {
        id: '1',
        username: 'Evgenii',
    },
    type: [ArticleFilter.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: ['123'],
        },
    ],
};

describe('articleDetailsSlice', () => {
    test('fetchArticleById.pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: 'error',
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('fetchArticleById.rejected', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: undefined,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.rejected,
        )).toEqual({
            isLoading: false,
        });
    });

    test('fetchArticleById.fullfield', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: 'error',
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(article, '1', ''),
        )).toEqual({
            isLoading: false,
            error: undefined,
            data: article,
        });
    });
});
