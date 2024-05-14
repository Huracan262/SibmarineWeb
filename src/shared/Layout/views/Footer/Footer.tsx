import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Footer.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFooter {

}

const Footer: React.FC<IFooter> = ({...props}) => {
    const bem = useBem('Footer');

    return (
        <footer className={bem.block()}>
            Я футер и мне стыдно!
        </footer>
    );
};

export default Footer;
