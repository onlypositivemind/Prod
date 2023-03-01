import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = memo(() => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeWhenUnmount>
            <main>
                <ProfileCard />
            </main>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
