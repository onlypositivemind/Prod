import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentForm/addCommentForm';
import s from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    onSendComment: (value: string) => void;
    className?: string;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const addCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation('comments');
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const handleCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const handleSendComment = useCallback(() => {
        onSendComment(text);
        handleCommentTextChange('');
    }, [handleCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(s.commentForm, [className], {})}>
                <Input
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={handleCommentTextChange}
                />
                <Button
                    theme={ButtonTheme.PRIMARY}
                    onClick={handleSendComment}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default addCommentForm;
