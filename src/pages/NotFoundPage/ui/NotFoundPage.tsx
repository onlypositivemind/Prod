import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <main className={classNames(s.notFoundPage, [className])}>
            <h2>{t('Страница не найдена')}</h2>
            <Button theme={ButtonTheme.PRIMARY} onClick={goBack}>
                {t('Назад')}
            </Button>
        </main>
    );
};
