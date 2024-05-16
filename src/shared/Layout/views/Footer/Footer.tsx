import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Footer.scss';
import Wrapper from '../../../Wrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFooter {

}

const Footer: React.FC<IFooter> = ({...props}) => {
    const bem = useBem('Footer');

    return (
        <footer className={bem.block()}>
            <Wrapper>
                Я футер и мне стыдно!
            </Wrapper>
        </footer>
    );
};

export default Footer;
