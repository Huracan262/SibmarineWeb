import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';

import Banner from './views/Banner';
import Service from './views/Service';
import Catalog from './views/Catalog';
import News from './views/News';
import Advantages from './views/Advantages';
import Partners from './views/Partners';
import Geography from './views/Geography';
import Clients from './views/Clients';
import Warranty from './views/Warranty';

import './IndexPage.scss';

export default function IndexPage() {
    const bem = useBem('IndexPage');

    return (
        <main className={bem.block()}>
            Домашняя страница
            <Banner />
            <Service />
            <Catalog />
            <News />
            <Advantages />
            <Partners />
            <Geography />
            <Clients />
            <Warranty />
        </main>
    );
}
