import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Wrapper from 'shared/Wrapper';

import Main from './views/Main';
import Info from './views/info';
import Similar from './views/Similar';

import catalogItems from '../../data/catalog/itemTest';
import {ICatalogItem} from '../../data/catalog/data';

import './ItemPage.scss';

const ItemPage = (item: ICatalogItem) => {
    const bem = useBem('ItemPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <Main item={item} />

                <Info item={item} />

                <Similar item={item} />
            </Wrapper>
        </main>
    );
};

export default ItemPage;
