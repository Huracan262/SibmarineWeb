import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';
import IndexPage from './IndexPage';
import AboutPage from './AboutPage';

export const ROUTE_ROOT = 'root';
export const ROUTE_ABOUT = 'about';

const roles = [null];

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    roles,
    items: {
        [ROUTE_ABOUT]: {
            label: 'О компании',
            exact: true,
            path: '/about',
            component: AboutPage,
            roles,
        },
    },
} as IRouteItem;
