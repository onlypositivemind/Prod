import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation('notFoundPage');

    return (
        <main className={classNames(s.wrapper, [className])}>
            <h2>{t('Страница не найдена')}</h2>
        </main>
    );
};
