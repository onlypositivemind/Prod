import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from 'entities/Article';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();

    return (
        <main className={classNames(s.articlesPage, [className], {})}>
            <ArticleList
                view={ArticleView.SMALL}
                articles={[]}
            />
        </main>
    );
});

export default ArticlesPage;
