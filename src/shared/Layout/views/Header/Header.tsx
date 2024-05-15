import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';



import './Header.scss';
import Logo from 'ui/Logo';
import Wrapper from '../../../Wrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IHeader {

}

const Header: React.FC<IHeader> = ({...props}) => {
    const bem = useBem('Header');

    return (
        <header className={bem.block()}>
            <Wrapper>
                Я хедер и мне не стыдно
                <Logo
                    className={bem.element('logo')}
                    size='200'
                    color='white'
                />
            </Wrapper>
        </header>
    );
};

export default Header;
