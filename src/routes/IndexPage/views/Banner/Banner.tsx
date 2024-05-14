import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Banner.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IBanner {

}

const Banner: React.FC<IBanner> = ({...props}) => {
    const bem = useBem('Banner');

    return (
        <div className={bem.block()}>
            {'Banner'}
        </div>
    );
};

export default Banner;
