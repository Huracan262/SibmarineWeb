import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import item from 'mocks/item/item';
import Wrapper from 'shared/Wrapper';

import Main from './views/Main';
import Info from './views/info';
import Similar from './views/Similar';

import './ItemPage.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IItemPage {

}

const ItemPage: React.FC<IItemPage> = ({...props}) => {
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
