import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticlesSortField } from '../../model/types/article';
import s from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    sort: ArticlesSortField;
    order: SortOrder;
    onChangeSort: (val: ArticlesSortField) => void;
    onChangeOrder: (val: SortOrder) => void;
    className?: string;
}

export const ArticleSortSelector = memo(({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
}: ArticleSortSelectorProps) => {
    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        { value: 'asc', content: t('Возрастанию') },
        { value: 'desc', content: t('Убыванию') },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticlesSortField>[]>(() => [
        { value: ArticlesSortField.CREATED, content: t('Дате создания') },
        { value: ArticlesSortField.TITLE, content: t('Названию') },
        { value: ArticlesSortField.VIEWS, content: t('Просмотрам') },
    ], [t]);

    return (
        <div className={classNames(s.sortSelector, [className], {})}>
            <Select
                label={t('Сортировать по')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('По')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
