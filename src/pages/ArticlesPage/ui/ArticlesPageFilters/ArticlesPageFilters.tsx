import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { TabItem } from 'shared/ui/Tabs/Tabs';
import { SortOrder } from 'shared/types';
import {
    ArticleView,
    ArticleViewSwitcher,
    ArticleSortSelector,
    ArticlesSortField,
    ArticleFilter,
    ArticleFilterTabs,
} from 'entities/Article';
import { fetchArticlesList } from '../../model/services';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageFilter,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors';
import s from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articlesView = useSelector(getArticlesPageView);
    const articlesSort = useSelector(getArticlesPageSort);
    const articlesOrder = useSelector(getArticlesPageOrder);
    const articlesSearch = useSelector(getArticlesPageSearch);
    const articlesFilter = useSelector(getArticlesPageFilter);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const handleChangeView = useCallback((view: ArticleView) => {
        if (articlesView !== view) {
            dispatch(articlesPageActions.setView(view));
        }
    }, [articlesView, dispatch]);

    const handleChangeSort = useCallback((sort: ArticlesSortField) => {
        dispatch(articlesPageActions.setSort(sort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const handleChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const handleChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const handleChangeFilter = useCallback((tab: TabItem<ArticleFilter>) => {
        dispatch(articlesPageActions.setFilter(tab.value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(s.filtersWrapper, [className], {})}>
            <div className={s.top}>
                <ArticleSortSelector
                    order={articlesOrder}
                    sort={articlesSort}
                    onChangeOrder={handleChangeOrder}
                    onChangeSort={handleChangeSort}
                />
                <ArticleViewSwitcher view={articlesView} onViewClick={handleChangeView} />
            </div>
            <Card className={s.search}>
                <Input
                    placeholder={t('Поиск...')}
                    value={articlesSearch}
                    onChange={handleChangeSearch}
                />
            </Card>
            <ArticleFilterTabs
                value={articlesFilter}
                onChangeFilter={handleChangeFilter}
            />
        </div>
    );
});
