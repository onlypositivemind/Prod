import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

export const PageError = memo(() => {
    const { t } = useTranslation();

    const handleReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={s.pageError}>
            <p>{t('Что-то пошло не так')}</p>
            <Button onClick={handleReload} theme={ButtonTheme.BLUE}>
                {t('Обновить')}
            </Button>
        </div>
    );
});
