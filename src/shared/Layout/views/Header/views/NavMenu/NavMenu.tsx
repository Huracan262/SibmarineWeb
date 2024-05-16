import React, {useContext} from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './NavMenu.scss';
import useMouseEvents from '../../hooks/useMouseEvents';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INavMenu {
    item: any,
}

const NavMenu: React.FC<INavMenu> = ({item}) => {
    const bem = useBem('NavMenu');

    const {onMouseLeave, onMouseEnter} = useMouseEvents();

    return (
        <aside
            onMouseEnter={() => onMouseEnter(item)}
            onMouseLeave={onMouseLeave}
            onFocus={() => onMouseEnter(item)}
            onBlur={onMouseLeave}
            className={bem.block()}
        >
            <ul>
                {item.items
                    .slice(0, 10)
                    .map((subMenu, id) => (
                        <li key={id}>
                            {subMenu.title}
                        </li>
                    ))}
            </ul>
            <ul>
                {item.items.map((subMenu, id) => {
                    return (
                        <li key={id}>
                            {subMenu.title}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default NavMenu;
