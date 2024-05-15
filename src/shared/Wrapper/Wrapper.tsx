import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Wrapper.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IWrapper {
    children: any,
}

// TODO - Исправить тип any
const Wrapper: React.FC<IWrapper> = (props: IWrapper) => {
    const bem = useBem('Wrapper');

    return (
        <div className={bem.block()}>
            {props.children}
        </div>
    );
};

export default Wrapper;
