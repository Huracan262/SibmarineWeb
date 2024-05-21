import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';

import RouteId from 'enums/RouteId';

import IndexPage from './IndexPage';
import AboutPage from './AboutPage';
import ItemPage from './ItemPage';

const roles = [null];

export default {
    id: RouteId.HOME,
    exact: true,
    path: '/',
    component: IndexPage,
    roles,
    items: {
        [RouteId.ABOUT]: {
            id: RouteId.ABOUT,
            label: 'О компании',
            exact: true,
            path: '/about',
            component: AboutPage,
            roles,
        },
        [RouteId.ITEM]: {
            id: RouteId.ITEM,
            label: 'Карточка товара',
            exact: true,
            path: '/item',
            component: ItemPage,
            roles,
        },
    },
} as IRouteItem;
