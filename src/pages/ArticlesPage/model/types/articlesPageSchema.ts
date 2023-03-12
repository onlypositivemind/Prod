import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    view: ArticleView;
    page: number;
    hasMore: boolean;
    limit?: number;
    isLoading?: boolean;
    error?: string;

    _inited: boolean;
}
