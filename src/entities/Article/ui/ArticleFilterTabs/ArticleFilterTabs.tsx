import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleFilter } from '../../model/types/article';

interface ArticleFilterTabsProps {
    value: ArticleFilter;
    onChangeFilter: (val: TabItem<ArticleFilter>) => void;
    className?: string;
}

export const ArticleFilterTabs = memo(({
    className,
    onChangeFilter,
    value,
}: ArticleFilterTabsProps) => {
    const { t } = useTranslation('article');

    const filterTabs: TabItem<ArticleFilter>[] = useMemo(() => [
        { value: ArticleFilter.ALL, content: t('Все') },
        { value: ArticleFilter.IT, content: t('Айти') },
        { value: ArticleFilter.ECONOMICS, content: t('Экономика') },
        { value: ArticleFilter.SCIENCE, content: t('Наука') },
    ], [t]);

    return (
        <Tabs
            className={classNames('', [className], {})}
            tabs={filterTabs}
            currentValue={value}
            onTabClick={onChangeFilter}
        />
    );
});
