import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    '@@articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
        const { dispatch, extra, rejectWithValue, getState } = thunkApi;

        const userData = getUserAuthData(getState());
        const articleData = getArticleDetailsData(getState());

        if (!userData || !text || !articleData) {
            return rejectWithValue('no data');
        }

        try {
            const { data } = await extra.api.post<Comment>('/comments', {
                articleId: articleData.id,
                userId: userData.id,
                text,
            });

            if (!data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(articleData.id));

            return data;
        } catch (e) {
            return rejectWithValue('Failed to send comment');
        }
    },
);
