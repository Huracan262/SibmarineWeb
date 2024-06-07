import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './NavList.scss';
import {Link} from '@steroidsjs/core/ui/nav';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INavList {
    item: any,
}

const NavList: React.FC<INavList> = ({item}) => {
    const bem = useBem('NavList');

    return (
        <div className={bem.block()}>
            <h3 className={bem.element('nav-title')}>
                <Link toRoute={item.url}>
                    {item.title}
                </Link>
            </h3>

            <ul className={bem.element('list')}>

                {item.items
                    .slice(0, 8)
                    .map((el, index) => (
                        <li
                            className={bem.element('item')}
                            key={index}
                        >
                            <Link
                                className={bem.element('link')}
                                toRoute={el.url}
                            >
                                {el.title}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default NavList;
