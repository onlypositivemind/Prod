import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleList } from 'entities/Article';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage, initArticlesPage } from '../../model/services';
import {
    articlesPageReducer,
    getArticles,
} from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const [searchParams] = useSearchParams();

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const articlesView = useSelector(getArticlesPageView);
    const hasMore = useSelector(getArticlesPageHasMore);

    const handleLoadNextPage = useCallback(() => {
        if (hasMore) {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch, hasMore]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    let content;

    if (error) {
        content = (
            <Text
                title={t('Произошла ошибка при загрузке списка статей')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <Page
                className={classNames(s.articlesPage, [className], {})}
                onScrollEnd={handleLoadNextPage}
            >
                <ArticlesPageFilters />
                <ArticleList
                    isLoading={isLoading}
                    articles={articles}
                    view={articlesView}
                />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeWhenUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
