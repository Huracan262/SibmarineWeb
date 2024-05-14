import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Clients.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IClients {

}

const Clients: React.FC<IClients> = ({...props}) => {
    const bem = useBem('Clients');

    return (
        <div className={bem.block()}>
            {'Clients'}
        </div>
    );
};

export default Clients;
