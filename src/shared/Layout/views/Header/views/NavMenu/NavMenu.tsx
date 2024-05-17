import React, {useEffect, useState} from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Link} from '@steroidsjs/core/ui/nav';

import {getItems, isCurrent} from './utils/helpers';
import useMouseEvents from '../../hooks/useMouseEvents';

import './NavMenu.scss';
import Menu from './Menu';

const NavMenu = ({item}: any) => {
    const bem = useBem('NavMenu');
    const {onMouseLeave, onMouseEnter} = useMouseEvents();

    const [menuOne, setMenuOne] = useState(null);
    const [menuTwo, setMenuTwo] = useState(null);
    const [menuThree, setMenuThree] = useState(null);

    useEffect(() => {
        setMenuOne(getItems(item));
    }, [item]);

    useEffect(() => {
        if (menuOne && menuOne.length > 0) {
            setMenuTwo(getItems(menuOne[0]));
        }
    }, [menuOne]);

    useEffect(() => {
        if (menuTwo && menuTwo.length > 0) {
            setMenuThree(getItems(menuTwo[0]));
        }
    }, [menuTwo]);

    const showMenuTwo = (subMenu): void => {
        setMenuTwo(getItems(subMenu));
    };

    const showMenuThree = (subMenu) : void => {
        setMenuThree(getItems(subMenu));
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
                <Menu
                    className={bem.element('list')}
                    menu={menuOne}
                    menuParent={menuTwo}
                    showMenu={showMenuTwo}
                />

                <Menu
                    className={bem.element('list')}
                    menu={menuTwo}
                    menuParent={menuThree}
                    showMenu={showMenuThree}
                />

                <Menu
                    className={bem.element('list')}
                    menu={menuThree}
                    menuChildren={menuTwo}
                />
            </div>
        </aside>
    );
};

export default NavMenu;
