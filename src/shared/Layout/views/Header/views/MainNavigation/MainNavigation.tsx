import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Link} from '@steroidsjs/core/ui/nav';

import DATA from 'data/DATA';
import Theme from 'enums/Theme';

import useMouseEvents from '../../hooks/useMouseEvents';

import './MainNavigation.scss';

interface IMainNavigation {
    navMenuItem: any, // TODO - заменить "any"
    theme?: Theme,
}

const MainNavigation = ({navMenuItem, theme}: IMainNavigation) => {
    const bem = useBem('MainNavigation');

    const {onMouseEnter, onMouseLeave} = useMouseEvents();

    return (
        <nav className={bem.block('')}>
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
                            /* TODO - Сделать что-то с классами */
                            className={`
                                ${bem.element('link')}
                                ${item === navMenuItem ? 'current' : ''}
                                ${item === navMenuItem && theme === Theme.light ? 'current-light' : ''}
                            `}
                            toRoute={item.url}
                        >
                            {/* TODO - Переписать theme на функцию */}
                            <span className={`${bem.element('icon')} ${theme === Theme.light ? 'light' : ''}`}>{item.icon}</span>
                            <span className={`${bem.element('text')} ${theme === Theme.light ? 'light' : ''}`}>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MainNavigation;
