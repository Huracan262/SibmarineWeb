import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Warranty.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IWarranty {

}

const Warranty: React.FC<IWarranty> = ({...props}) => {
    const bem = useBem('Warranty');

    return (
        <div className={bem.block()}>
            {'Warranty'}
        </div>
    );
};

export default Warranty;
