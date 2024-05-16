import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Catalog.scss';
import Wrapper from '../../../../shared/Wrapper';
import Title from '../../../../ui/Title';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICatalog {

}

const Catalog: React.FC<ICatalog> = ({...props}) => {
    const bem = useBem('Catalog');

    return (
        <div className={bem.block()}>
            <Wrapper>
                <Title>Каталог</Title>
            </Wrapper>
        </div>
    );
};

export default Catalog;
