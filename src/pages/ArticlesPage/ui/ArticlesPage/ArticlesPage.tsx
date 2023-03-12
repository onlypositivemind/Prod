import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';
import { ArticleList, ArticleView, ArticleViewSwitcher } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { fetchArticlesList, fetchNextArticlesPage } from '../../model/services';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageError,
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
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const articlesView = useSelector(getArticlesPageView);

    const handleChangeView = useCallback((view: ArticleView) => {
        if (articlesView !== view) {
            dispatch(articlesPageActions.setView(view));
        }
    }, [articlesView, dispatch]);

    const handleLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());

        dispatch(fetchArticlesList({
            page: 1,
        }));
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
                <ArticleViewSwitcher view={articlesView} onViewClick={handleChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    articles={articles}
                    view={articlesView}
                />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            {content}
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
