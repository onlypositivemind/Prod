import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import s from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();

    const handleReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={s.pageError}>
            <p>{t('Что-то пошло не так.')}</p>
            <Button onClick={handleReload}>{t('Обновить')}</Button>
            <LangSwitcher />
        </div>
    );
};
