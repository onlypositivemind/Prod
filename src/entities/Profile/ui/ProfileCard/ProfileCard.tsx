import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(s.profileCard, [className], {})}>
            <div className={s.top}>
                <Text title={t('Профиль')} />
                <Button theme={ButtonTheme.PRIMARY} className={s.editBtn}>
                    {t('Изменить')}
                </Button>
            </div>
            <div className={s.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t('Имя')}
                    className={s.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Фамилия')}
                    className={s.input}
                />
            </div>
        </div>
    );
};
