import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('', [className], {})}>
            ArticleImageBlockComponent
        </div>
    );
};
