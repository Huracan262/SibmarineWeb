import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Clients.scss';
import Wrapper from '../../../../shared/Wrapper';
import Title from '../../../../ui/Title';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IClients {

}

const Clients: React.FC<IClients> = ({...props}) => {
    const bem = useBem('Clients');

    return (
        <div className={bem.block()}>
            <Wrapper>
                <Title>Наши клиенты</Title>
            </Wrapper>
        </div>
    );
};

export default Clients;
