import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

const data = {
    user: { authData: { id: '1' } },
    articleDetails: { data: { id: '1' } },
    text: 'Some comment',
};

describe('Async thunk addCommentForArticle', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: { authData: { id: '1' } },
            articleDetails: { data: { id: '1' } },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));

        const res = await thunk.callThunk('Some comment');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('fulfilled');
        expect(res.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: { authData: { id: '1' } },
            articleDetails: { data: { id: '1' } },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const res = await thunk.callThunk('text');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('rejected');
    });
});
