import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Geography.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IGeography {

}

const Geography: React.FC<IGeography> = ({...props}) => {
    const bem = useBem('Geography');

    return (
        <div className={bem.block()}>
            {'Geography'}
        </div>
    );
};

export default Geography;
