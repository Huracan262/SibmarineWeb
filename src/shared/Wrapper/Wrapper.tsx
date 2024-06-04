import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Wrapper.scss';

interface IWrapper {
    children: any,
    className?: string,
}

// TODO - Исправить тип any
const Wrapper = ({children, className}: IWrapper) => {
    const bem = useBem('Wrapper');

    return (
        <div className={`${bem.block()} ${className ?? ''}`}>
            {children}
        </div>
    );
};

export default Wrapper;
