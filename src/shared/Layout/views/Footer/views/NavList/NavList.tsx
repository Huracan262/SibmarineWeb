import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './NavList.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INavList {
    item: any,
    key?: number,
}

const NavList: React.FC<INavList> = ({item}) => {
    const bem = useBem('NavList');

    return (
        <div className={bem.block()}>
            <h3 className={bem.element('nav-title')}>{item.title}</h3>

            <ul className={bem.element('list')}>

                {item.items
                    .slice(0, 8)
                    .map((el, index) => (
                        <li
                            className={bem.element('item')}
                            key={index}
                        >
                            <a className={bem.element('link')}>{el.title}</a>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default NavList;
