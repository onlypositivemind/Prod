import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import s from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    view: ArticleView;
    className?: string;
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
    if (view === ArticleView.BIG) {
        return (
            <article className={classNames(s.articleItem, [className, s[view]], {})}>
                <Card>
                    <div className={s.header}>
                        <div className={s.userInfo}>
                            <Skeleton height={30} width={30} border='50%' />
                            <Skeleton height={24} width={70} />
                        </div>
                        <Skeleton height={24} width={85} />
                    </div>
                    <Skeleton height={24} width={150} className={s.title} />
                    <Skeleton className={s.imageWrapper} />
                    <div className={s.footer}>
                        <Skeleton height={16} width={200} />
                        <div className={s.views}>
                            <Skeleton height={16} width={110} />
                            <Skeleton height={24} width={60} />
                        </div>
                    </div>
                </Card>
            </article>
        );
    }

    return (
        <article className={classNames(s.articleItem, [className, s[view]], {})}>
            <Card>
                <div className={s.imageWrapper}>
                    <Skeleton width={180} height={180} />
                </div>
                <div className={s.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={25} />
            </Card>
        </article>
    );
});
