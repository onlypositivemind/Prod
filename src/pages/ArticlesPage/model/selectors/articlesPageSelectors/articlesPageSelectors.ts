import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesSortField, ArticleFilter, ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesCurrentPage = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order || 'desc';
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort || ArticlesSortField.VIEWS;
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArticlesPageFilter = (state: StateSchema) => state.articlesPage?.filter || ArticleFilter.ALL;
