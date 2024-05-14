import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Partners.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPartners {

}

const Partners: React.FC<IPartners> = ({...props}) => {
    const bem = useBem('Partners');

    return (
        <div className={bem.block()}>
            {'Partners'}
        </div>
    );
};

export default Partners;
