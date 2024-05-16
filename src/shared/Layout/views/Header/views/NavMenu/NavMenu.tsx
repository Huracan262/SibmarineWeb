import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './NavMenu.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INavMenu {

}

const NavMenu: React.FC<INavMenu> = ({...props}) => {
    const bem = useBem('NavMenu');

    return (
        <div className={bem.block()}>
            {'NavMenu'}
        </div>
    );
};

export default NavMenu;
