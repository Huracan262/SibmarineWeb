import React, {useEffect, useState} from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Link} from '@steroidsjs/core/ui/nav';

import useMouseEvents from '../../hooks/useMouseEvents';

import './NavMenu.scss';

const templateMenu = (element) => {
    if (element === null || element === undefined) {
        return undefined;
    }

    return element.items && element.items.length > 0 ? element.items.slice(0, 6) : undefined;
};

const NavMenu = ({item}: any) => {
    const bem = useBem('NavMenu');
    const {onMouseLeave, onMouseEnter} = useMouseEvents();

    const [menuOne, setMenuOne] = useState(undefined); // X - 0 - 0
    const [menuTwo, setMenuTwo] = useState(undefined); // 0 - X - 0
    const [menuThree, setMenuThree] = useState(undefined); // 0 - 0 - X

    useEffect(() => {
        setMenuOne(templateMenu(item));
    }, [item]);

    useEffect(() => {
        if (menuOne && menuOne.length > 0) {
            setMenuTwo(templateMenu(menuOne[0]));
        }
    }, [menuOne]);

    useEffect(() => {
        if (menuTwo && menuTwo.length > 0) {
            setMenuThree(templateMenu(menuTwo[0]));
        }
    }, [menuTwo]);

    const showMenuTwo = (subMenu): void => {
        setMenuTwo(templateMenu(subMenu));
    };

    const showMenuThree = (subMenu) : void => {
        setMenuThree(templateMenu(subMenu));
    };

    return (
        <aside
            onMouseMove={() => onMouseEnter(item)}
            onMouseLeave={onMouseLeave}
            onFocus={() => onMouseEnter(item)}
            onBlur={onMouseLeave}
            className={bem.block()}
        >
            <h2 className={bem.element('title')}>{item.title}</h2>

            <div className={bem.element('container')}>
                <ul className={bem.element('list')}>
                    {menuOne?.map((subMenu, index) => (
                        <li
                            className={bem.element('item')}
                            key={index}
                        >
                            <Link className={bem.element('link')}>
                                <span
                                    onMouseEnter={() => showMenuTwo(subMenu)}
                                    className={`${bem.element('text')} ${menuTwo?.[0].title === templateMenu(subMenu)?.[0].title ? 'current' : ''}`}
                                >
                                    {subMenu.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className={bem.element('list')}>
                    {menuTwo?.map((subMenu, index) => (
                        <li
                            className={bem.element('item')}
                            key={index}
                        >
                            <Link className={bem.element('link')}>
                                <span
                                    onMouseEnter={() => showMenuThree(subMenu)}
                                    className={`${bem.element('text')} ${menuThree?.[0].title === templateMenu(subMenu)?.[0].title ? 'current' : ''}`}
                                >
                                    {subMenu.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className={bem.element('list')}>
                    {menuTwo && menuThree && menuThree
                        .map((product, index) => (
                            <li
                                className={bem.element('item')}
                                key={index}
                            >
                                <Link className={bem.element('link')}>
                                    <span className={bem.element('text')}>{product.title}</span>
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </aside>
    );
};

export default NavMenu;
