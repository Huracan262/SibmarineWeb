import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Catalog.scss';
import Wrapper from '../../../../shared/Wrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICatalog {

}

const Catalog: React.FC<ICatalog> = ({...props}) => {
    const bem = useBem('Catalog');

    return (
        <div className={bem.block()}>
            <Wrapper>
                {'Catalog'}
            </Wrapper>
        </div>
    );
};

export default Catalog;
