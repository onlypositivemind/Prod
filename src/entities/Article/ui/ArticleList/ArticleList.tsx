import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import s from './ArticleList.module.scss';

interface ArticleListProps {
    articles: Article[];
    className?: string;
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BIG ? 3 : 9)
    .fill(0)
    .map((el, i) => (
        <ArticleListItemSkeleton view={view} key={i} />
    ));

export const ArticleList = memo(({
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
}: ArticleListProps) => {
    const { t } = useTranslation('article');

    const renderArticle = useCallback((article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
        />
    ), [view]);

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(s.articleList, [className, s.notFound], {})}>
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames(s.articleList, [className, s[view]], {})}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
