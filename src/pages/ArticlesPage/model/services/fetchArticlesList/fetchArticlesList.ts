import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleFilter } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesCurrentPage,
    getArticlesPageFilter,
    getArticlesPageLimit,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
} from '../../selectors/articlesPageSelectors/articlesPageSelectors';

interface fetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, ThunkConfig<string>>(
    '@@articlesPage/fetchArticlesList',
    async (args, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const page = getArticlesCurrentPage(getState());
        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const filter = getArticlesPageFilter(getState());

        try {
            addQueryParams({ sort, order, search, filter });

            const { data } = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: filter === ArticleFilter.ALL ? undefined : filter,
                },
            });

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (e) {
            return rejectWithValue('Failed to get articles');
        }
    },
);
