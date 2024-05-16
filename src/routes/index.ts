import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';

import RoutesId from 'enums/RoutesId';

import IndexPage from './IndexPage';
import AboutPage from './AboutPage';

const roles = [null];

export default {
    id: RoutesId.HOME,
    exact: true,
    path: '/',
    component: IndexPage,
    roles,
    items: {
        [RoutesId.ABOUT]: {
            id: RoutesId.ABOUT,
            label: 'О компании',
            exact: true,
            path: '/about',
            component: AboutPage,
            roles,
        },
    },
} as IRouteItem;
