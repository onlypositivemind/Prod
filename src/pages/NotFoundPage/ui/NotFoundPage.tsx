import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Page className={classNames(s.notFoundPage, [className])}>
            <h2>{t('Страница не найдена')}</h2>
            <Button theme={ButtonTheme.PRIMARY} onClick={goBack}>
                {t('Назад')}
            </Button>
        </Page>
    );
});
