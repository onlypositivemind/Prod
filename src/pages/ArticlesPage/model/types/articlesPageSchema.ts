import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from 'shared/types';
import { Article, ArticleView, ArticlesSortField, ArticleFilter } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    hasMore: boolean;
    limit: number;

    // filters sort
    view: ArticleView;
    order: SortOrder;
    sort: ArticlesSortField;
    search: string;
    filter: ArticleFilter;

    _inited: boolean;
}
