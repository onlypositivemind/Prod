import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleDetails } from 'entities/Article';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <main className={classNames('', [className], {})}>
                <Text title={t('Статья не найдена')} align={TextAlign.CENTER} />
            </main>
        );
    }

    return (
        <main className={classNames(s.articleDetailsPage, [className], {})}>
            <ArticleDetails id={id} />
        </main>
    );
});

export default ArticleDetailsPage;
