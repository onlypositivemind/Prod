import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'notFound',
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: AppRoutesProps[] = [
    { path: RoutesPath.main, element: <MainPage /> },
    { path: RoutesPath.about, element: <AboutPage /> },
    { path: RoutesPath.profile, element: <ProfilePage />, authOnly: true },
    { path: RoutesPath.notFound, element: <NotFoundPage /> },
];
