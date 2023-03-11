import { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleDetails } from 'entities/Article';
import { CommentsList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';
import {
    fetchCommentsByArticleId,
    addCommentForArticle,
} from '../../model/services';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation(['article', 'comments']);
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const articleIsLoading = useSelector(getArticleDetailsIsLoading);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);
    const comments = useSelector(getArticleComments.selectAll);

    const handleSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <main className={classNames('', [className], {})}>
                <Text title={t('Статья не найдена')} align={TextAlign.CENTER} />
            </main>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <main className={classNames(s.articleDetailsPage, [className], {})}>
                <article>
                    <ArticleDetails id={id} />
                    {!articleIsLoading && (
                        <>
                            <Text
                                title={t('Комментарии', { ns: 'comments' })}
                                className={s.commentTitle}
                            />
                            <AddCommentForm onSendComment={handleSendComment} />
                            <CommentsList
                                isLoading={commentsIsLoading}
                                comments={comments}
                            />
                        </>
                    )}
                </article>
            </main>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
