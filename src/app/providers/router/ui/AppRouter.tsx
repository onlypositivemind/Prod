import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routerConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { getUserAuthData } from 'entities/User';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => routerConfig.filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
});
