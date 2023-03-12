import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Icon, IconStyle } from 'shared/ui/Icon/Icon';
import ListIcon from 'shared/assets/icons/list-view.svg';
import TiledIcon from 'shared/assets/icons/tiled-view.svg';
import { ArticleView } from '../../model/types/article';
import s from './ArticleViewSwitcher.module.scss';

interface ArticleViewSwitcherProps {
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
    className?: string;
}

const viewTypes = [
    { view: ArticleView.SMALL, icon: TiledIcon },
    { view: ArticleView.BIG, icon: ListIcon },
];

export const ArticleViewSwitcher = memo(({ className, onViewClick, view }: ArticleViewSwitcherProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(s.switchers, [className], {})}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    onClick={() => onViewClick?.(viewType.view)}
                    className={s.switcher}
                >
                    <Icon
                        Svg={viewType.icon}
                        width={20}
                        height={20}
                        style={viewType.view === view ? IconStyle.BLUE : undefined}
                    />
                </Button>
            ))}
        </div>
    );
});
