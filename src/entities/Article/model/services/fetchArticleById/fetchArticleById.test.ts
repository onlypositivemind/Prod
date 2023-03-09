import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { ArticleBlockType, ArticleType } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';

const data = {
    id: '1',
    title: 'JavaScript',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://blog.logrocket.com/wp-content/uploads/2022/07/guide-promises-node-js-nocdn.png',
    views: 2002,
    createdAt: '29.09.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: ['123'],
        },
    ],
};

describe('Async thunk fetchArticleById', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const res = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('fulfilled');
        expect(res.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const res = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('rejected');
    });
});
