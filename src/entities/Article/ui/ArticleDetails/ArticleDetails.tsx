import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import s from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    id: string;
    className?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const error = useSelector(getArticleDetailsError);
    // const isLoading = useSelector(getArticleDetailsIsLoading);
    const isLoading = true;
    const data = useSelector(getArticleDetailsData);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={s.avatar} width={200} height={200} border='50%' />
                <div className={s.skeletons}>
                    <Skeleton width={300} height={32} />
                    <Skeleton width={600} height={24} />
                    <Skeleton width='100%' height={200} />
                    <Skeleton width='100%' height={200} />
                </div>
            </div>
        );
    } else if (error) {
        content = (
            <Text
                title={t('Произошла ошибка при загрузке статьи')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            // eslint-disable-next-line i18next/no-literal-string
            <p>ArticleDetails</p>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeWhenUnmount>
            <div className={classNames(s.articleDetails, [className], {})}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
