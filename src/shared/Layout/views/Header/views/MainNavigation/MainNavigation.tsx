import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './MainNavigation.scss';
import DATA from 'data/DATA';
import {Link} from '@steroidsjs/core/ui/nav';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMainNavigation {

}

const MainNavigation: React.FC<IMainNavigation> = ({...props}) => {
    const bem = useBem('MainNavigation');

    return (
        <nav className={bem.block()}>
            <ul className={bem.element('list')}>
                {DATA.map((item, id) => {
                    return (
                        <li
                            className={bem.element('list-item')}
                            key={id}
                        >
                            <Link toRoute={item.url}>
                                {item.icon}
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default MainNavigation;
