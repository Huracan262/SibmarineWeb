import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Menu.scss';
import {Link} from '@steroidsjs/core/ui/nav';
import {isCurrent} from '../utils/helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMenu {
    className?: string,
    menu: any,
    menuParent?: any,
    menuChildren?: any,
    showMenu?: any,
}

const Menu: React.FC<IMenu> = ({className, menu, menuParent = false, menuChildren = true, showMenu = null}) => {
    const bem = useBem('Menu');

    return (
        <ul className={`${bem.block()} ${className}`}>
            {!menuChildren ? null : menu?.map((subMenu, index) => (
                <li
                    className={bem.element('item')}
                    key={index}
                >
                    <Link className={bem.element('link')}>
                        <span
                            onMouseEnter={() => showMenu(subMenu)}
                            className={`${bem.element('text')} ${isCurrent(menuParent, subMenu) ? 'current' : ''}`}
                        >
                            {subMenu.title}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
