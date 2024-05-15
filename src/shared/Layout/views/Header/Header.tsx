import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Logo from 'ui/Logo';
import Wrapper from 'shared/Wrapper';
import Contacts from 'shared/Contacts';
import Button from 'ui/Button';

import './Header.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IHeader {

}

const Header: React.FC<IHeader> = ({...props}) => {
    const bem = useBem('Header');

    return (
        <header className={bem.block()}>
            <Wrapper>
                <Logo
                    className={bem.element('logo')}
                    size='200'
                    color='white'
                />

                <div>
                    <div>
                        <Contacts />
                        <Button onClick={''}>
                            Оставить заявку!
                        </Button>
                    </div>


                </div>
            </Wrapper>
        </header>
    );
};

export default Header;
