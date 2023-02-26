import { AppRouter } from 'app/providers/router';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import { userActions } from 'entities/User';

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className='app'>
            <Header />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};
