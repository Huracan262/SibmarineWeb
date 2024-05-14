import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Service.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IService {

}

const Service: React.FC<IService> = ({...props}) => {
    const bem = useBem('Service');

    return (
        <div className={bem.block()}>
            {'Service'}
        </div>
    );
};

export default Service;
