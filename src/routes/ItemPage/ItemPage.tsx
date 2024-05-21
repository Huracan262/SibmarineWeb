import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './ItemPage.scss';
import {Slider} from '@steroidsjs/core/ui/content';
import Main from './views/Main';
import Info from './views/info';
import Similar from './views/Similar';
import item from '../../mocks/item/item';
import Wrapper from '../../shared/Wrapper';

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
