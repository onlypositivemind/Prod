import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import UserIcon from 'shared/assets/images/default-user.png';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { Comment } from '../../model/types/comment';
import s from './CommentCard.module.scss';

interface CommentCardProps {
    comment: Comment;
    className?: string;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    const { user, text } = comment;

    if (isLoading) {
        return (
            <div className={classNames(s.commentCard, [className, s.loading], {})}>
                <div className={s.header}>
                    <Skeleton width={40} height={40} border='50%' />
                    <Skeleton width={100} height={25} />
                </div>
                <Skeleton width='100%' height={50} />
            </div>

        );
    }

    return (
        <div className={classNames(s.commentCard, [className], {})}>
            <AppLink
                to={`${RoutesPath.profile}${user.id}`}
                className={s.header}
                theme={AppLinkTheme.PRIMARY}
            >
                <Avatar size={40} src={user.avatar || UserIcon} />
                <Text title={user.username} />
            </AppLink>
            <Text text={text} />
        </div>
    );
});
