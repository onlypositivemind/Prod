import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
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
    if (isLoading) {
        return (
            <div className={classNames(s.articleList, [className, s[view]], {})}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderItem = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
        />
    );

    return (
        <div className={classNames(s.articleList, [className, s[view]], {})}>
            {articles.length > 0
                ? articles.map(renderItem)
                : null}
        </div>
    );
});
