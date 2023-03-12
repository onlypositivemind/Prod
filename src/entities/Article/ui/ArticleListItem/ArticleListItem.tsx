import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';
import s from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    article: Article;
    view: ArticleView;
    className?: string;
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation('article');
    const { title, img, type, views, user, id, blocks } = article;

    if (view === ArticleView.BIG) {
        const textBlock = blocks
            .find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <article className={classNames(s.articleItem, [className, s[view]], {})}>
                <Card>
                    <div className={s.header}>
                        <div className={s.userInfo}>
                            <Avatar size={30} src={user.avatar} />
                            <Text text={user.username} />
                        </div>
                        <time dateTime={article.createdAt}>
                            {article.createdAt}
                        </time>
                    </div>
                    <h3 className={s.title}>{title}</h3>
                    <Text text={type.join(', ')} />
                    <div className={s.imageWrapper}>
                        <img src={img} alt={title} />
                    </div>
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={s.textBlock} />}
                    <div className={s.footer}>
                        <AppLink
                            to={`${RoutesPath.article_details}${id}`}
                            theme={AppLinkTheme.PRIMARY}
                        >
                            {t('Читать далее...')}
                        </AppLink>
                        <div className={s.views}>
                            <Text text={String(views)} />
                            <Icon Svg={EyeIcon} height={20} width={20} />
                        </div>
                    </div>
                </Card>
            </article>
        );
    }

    return (
        <article className={classNames(s.articleItem, [className, s[view]], {})}>
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                to={`${RoutesPath.article_details}${id}`}
            >
                <Card>
                    <div className={s.imageWrapper}>
                        <img src={img} alt={title} />
                        <time dateTime={article.createdAt}>
                            {article.createdAt}
                        </time>
                    </div>
                    <div className={s.infoWrapper}>
                        <Text text={type.join(', ')} size={TextSize.S} />
                        <div className={s.views}>
                            <Text text={String(views)} size={TextSize.S} />
                            <Icon Svg={EyeIcon} height={20} width={20} />
                        </div>
                    </div>
                    <h3 className={s.title}>{title}</h3>
                </Card>
            </AppLink>
        </article>
    );
});
