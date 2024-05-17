import React, {useState} from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './MainNavigation.scss';
import DATA from 'data/DATA';
import {Link} from '@steroidsjs/core/ui/nav';
import useMouseEvents from '../../hooks/useMouseEvents';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMainNavigation {
    navMenuItem: any, // TODO - заменить "any"
    setNavMenuItem: any, // TODO - заменить "any"
}

const MainNavigation: React.FC<IMainNavigation> = ({navMenuItem ,setNavMenuItem}) => {
    const bem = useBem('MainNavigation');

    const {onMouseEnter, onMouseLeave} = useMouseEvents();

    return (
        <nav className={bem.block()}>
            <ul className={bem.element('list')}>
                {DATA.map((item, id) => (
                    <li
                        className={bem.element('list-item')}
                        onMouseMove={() => onMouseEnter(item)}
                        onMouseLeave={onMouseLeave}
                        onFocus={() => onMouseEnter(item)}
                        onBlur={onMouseLeave}
                        key={id}
                    >
                        <Link
                            className={`${bem.element('link')} ${item === navMenuItem ? 'current' : ''}`}
                            toRoute={item.url}
                        >
                            <span className={bem.element('icon')}>{item.icon}</span>
                            <span className={bem.element('text')}>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MainNavigation;
