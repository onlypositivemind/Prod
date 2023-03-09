import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import s from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    block: ArticleTextBlock;
    className?: string;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
    const { title, paragraphs } = block;
    const { t } = useTranslation();

    return (
        <div className={classNames('', [className], {})}>
            {title && <Text title={title} className={s.title} />}
            {paragraphs.map((paragraph, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Text key={i} text={paragraph} />
            ))}
        </div>
    );
});
