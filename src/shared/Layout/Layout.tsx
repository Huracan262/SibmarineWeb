import * as React from 'react';

import {useBem, useSelector} from '@steroidsjs/core/hooks';
import useLayout, {STATUS_LOADING, STATUS_NOT_FOUND, STATUS_OK} from '@steroidsjs/core/hooks/useLayout';

import {Notifications} from '@steroidsjs/core/ui/layout';
import Portal from '@steroidsjs/core/ui/layout/Portal';
import ModalPortal from '@steroidsjs/core/ui/modal/ModalPortal';
import {getRouteBreadcrumbs, getRouteId} from '@steroidsjs/core/reducers/router';

import RouteId from 'enums/RouteId';
import Theme from 'enums/Theme';
import NotFoundPage from 'routes/NotFoundPage';

import './Layout.scss';
import Header from './views/Header';
import Footer from './views/Footer';

// TODO - Отрефакторить код (перенести ХК)
export default function Layout(props: React.PropsWithChildren<any>) {
    const bem = useBem('Layout');
    const routeId = useSelector(getRouteId);
    const breadcrumbs = useSelector(state => getRouteBreadcrumbs(state, routeId));

    //const components = useComponents();
    const {status} = useLayout(/*() => components.http.post('/api/v1/init')*/);

    if (status === STATUS_NOT_FOUND) {
        return (
            <NotFoundPage />
        );
    }

    if (status !== STATUS_OK) {
        return status !== STATUS_LOADING ? status : null;
    }

    return (
        <div className={bem.block()}>
            <Header theme={routeId === RouteId.HOME ? Theme.light : Theme.dark} />

            <div className={bem.element('content')}>
                <Notifications />
                {/*{routeId !== RouteId.HOME && <Breadcrumbs items={breadcrumbs} />}*/}
                {props.children}
                <ModalPortal />
                {
                    process.env.IS_SSR
                        ? null
                        : <Portal />
                }
            </div>

            <Footer />
        </div>
    );
}
