import React from 'react';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/main-page.svg';
import AboutPageIcon from 'shared/assets/icons/about-page.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-page.svg';

export interface NavbarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const NavbarItemsList: NavbarItemType[] = [
    { path: RoutesPath.main, text: 'Главная', Icon: MainPageIcon },
    { path: RoutesPath.about, text: 'О нас', Icon: AboutPageIcon },
    { path: RoutesPath.profile, text: 'Профиль', Icon: ProfilePageIcon },
];
