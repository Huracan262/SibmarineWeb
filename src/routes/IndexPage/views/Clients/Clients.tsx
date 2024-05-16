import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Clients.scss';
import Wrapper from '../../../../shared/Wrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IClients {

}

const Clients: React.FC<IClients> = ({...props}) => {
    const bem = useBem('Clients');

    return (
        <div className={bem.block()}>
            <Wrapper>
                {'Clients'}
            </Wrapper>
        </div>
    );
};

export default Clients;
