import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();

    return (
        <main className={classNames(s.articlesPage, [className], {})}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Link to='/articles/1'>Article 1</Link>
        </main>
    );
});

export default ArticlesPage;
