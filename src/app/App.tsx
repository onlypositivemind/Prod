import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from 'app/providers/router';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { getUserInited, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export const App = () => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className='app'>
            <Header />
            <div className='content-page'>
                <Sidebar />
                <main>
                    {inited && <AppRouter />}
                </main>
            </div>
        </div>
    );
};
