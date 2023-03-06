import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import s from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const handleEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const handleCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const handleSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(s.header, [className], {})}>
            <Text title={t('Профиль')} />
            {readonly
                ? (
                    <Button
                        theme={ButtonTheme.PRIMARY}
                        onClick={handleEdit}
                    >
                        {t('Изменить')}
                    </Button>
                )
                : (
                    <div className={s.btns}>
                        <Button
                            theme={ButtonTheme.BLUE}
                            onClick={handleSave}
                        >
                            {t('Сохранить')}
                        </Button>
                        <Button
                            theme={ButtonTheme.PRIMARY}
                            onClick={handleCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                    </div>
                )}
        </div>
    );
};
