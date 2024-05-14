import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Catalog.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICatalog {

}

const Catalog: React.FC<ICatalog> = ({...props}) => {
    const bem = useBem('Catalog');

    return (
        <div className={bem.block()}>
            {'Catalog'}
        </div>
    );
};

export default Catalog;
