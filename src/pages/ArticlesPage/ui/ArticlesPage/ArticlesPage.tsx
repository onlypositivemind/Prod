import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <main className={classNames('', [className], {})}>
            ArticlesPage
        </main>
    );
});

export default ArticlesPage;
