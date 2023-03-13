import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import {
    getArticlesCurrentPage,
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
} from '../../selectors/articlesPageSelectors/articlesPageSelectors';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    '@@articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const hasMore = getArticlesPageHasMore(getState());
        const currentPage = getArticlesCurrentPage(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(currentPage + 1));

            dispatch(fetchArticlesList({}));
        }
    },
);
