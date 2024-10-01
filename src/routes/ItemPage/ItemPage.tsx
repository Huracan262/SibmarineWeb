import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Breadcrumbs} from '@steroidsjs/core/ui/nav';

import Wrapper from 'shared/Wrapper';

import Main from './views/Main';
import Info from './views/Info';
import Similar from './views/Similar';

import './ItemPage.scss';

interface IItemPage {
    title: string,
}

const ItemPage = (item: IItemPage) => {
    const bem = useBem('ItemPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <Breadcrumbs
                    className={bem.element('breadcrumbs')}
                    showIcon
                />

                <Main item={item} />

                <Info item={item} />

                <Similar item={item} />
            </Wrapper>
        </main>
    );
};

export default ItemPage;
