import { memo, useCallback, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    ProfileCard,
    profileActions,
    profileReducer, getProfileForm,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = memo(() => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const handleChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value }));
    }, [dispatch]);

    const handleChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const handleChangeAge = useCallback((value?: string) => {
        const age = Number(value);
        if ((age || value === '') && age < 100) {
            dispatch(profileActions.updateProfile({ age }));
        }
    }, [dispatch]);

    const handleChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const handleChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const handleChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const handleChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const handleChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeWhenUnmount>
            <main>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    handleChangeFirstname={handleChangeFirstname}
                    handleChangeLastname={handleChangeLastname}
                    handleChangeAge={handleChangeAge}
                    handleChangeCity={handleChangeCity}
                    handleChangeUsername={handleChangeUsername}
                    handleChangeAvatar={handleChangeAvatar}
                    handleChangeCurrency={handleChangeCurrency}
                    handleChangeCountry={handleChangeCountry}
                />
            </main>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
