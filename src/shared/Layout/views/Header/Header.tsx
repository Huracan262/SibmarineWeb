import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Header.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IHeader {

}

const Header: React.FC<IHeader> = ({...props}) => {
    const bem = useBem('Header');

    return (
        <header className={bem.block()}>
            Я хедер и мне не стыдно
        </header>
    );
};

export default Header;
