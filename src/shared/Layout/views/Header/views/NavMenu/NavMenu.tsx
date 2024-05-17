import React, {useEffect, useState } from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import './NavMenu.scss';
import useMouseEvents from '../../hooks/useMouseEvents';
import {Link} from '@steroidsjs/core/ui/nav';


// type TMenu = { title: string }[] | undefined;

const templateMenu = (element) => {
    if (element === null || element === undefined) {
        return undefined;
    }

    return element.items && element.items.length > 0 ? element.items.slice(0, 6) : undefined;
}

const NavMenu = ({item}) => {
    const bem = useBem('NavMenu');
    const { onMouseLeave, onMouseEnter } = useMouseEvents();

    const [menuOne, setMenuOne] = useState(templateMenu(item));
    const [menuTwo, setMenuTwo] = useState(undefined);
    const [menuThree, setMenuThree] = useState(undefined);

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
    }

    const showMenuThree = (subMenu) : void => {
        setMenuThree(templateMenu(subMenu));
    }

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
                            onMouseEnter={() => showMenuTwo(subMenu)}
                            key={index}
                        >
                            <Link className={bem.element('link')}>
                                <span className={`${bem.element('text')}  ${menuTwo === templateMenu(subMenu) ? bem.element('current') : ''}`}>{subMenu.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className={bem.element('list')}>
                    {menuTwo?.map((subMenu, index) => (
                        <li
                            className={bem.element('item')}
                            onMouseEnter={() => showMenuThree(subMenu)}
                            key={index}
                        >
                            <Link className={bem.element('link')}>
                                <span className={bem.element('text')}>{subMenu.title}</span>
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



// import React, {useContext, useEffect, useState} from 'react';
//
// import useBem from '@steroidsjs/core/hooks/useBem';
//
// import './NavMenu.scss';
// import useMouseEvents from '../../hooks/useMouseEvents';
//
// // eslint-disable-next-line @typescript-eslint/no-empty-interface
// interface INavMenu {
// }
//
//
//
//
// type TMenu = { title: string }[] | undefined;
//
// const templateMenu = (element: { items?: { title: string }[] }): TMenu => {
//     if (element === null) {
//         return undefined;
//     }
//
//     return element.items && element.items.length > 0 ? element.items.slice(0, 6) : undefined;
// }
//
//
//
//
// const NavMenu = ({item}) => {
//     const bem = useBem('NavMenu');
//
//     const {onMouseLeave, onMouseEnter} = useMouseEvents();
//
//     const [menuOne, setMenuOne] = useState(templateMenu(item));
//     const [menuTwo, setMenuTwo] = useState(templateMenu(undefined));
//     const [menuTree, setMenuTree] = useState(templateMenu(undefined));
//
//     useEffect(() => {
//         setMenuOne(item)
//     }, [item]);
//
//     useEffect(() => {
//         if (menuOne && menuOne.length > 0) {
//             setMenuTwo(templateMenu(menuOne[0]));
//         }
//     }, [menuOne]);
//
//     useEffect(() => {
//         if (menuTwo && menuTwo.length > 0) {
//             setMenuTree(templateMenu(menuTwo[0]));
//         }
//     }, [menuTwo]);
//
//
//     const showMenuTwo = (subMenu: { title: string }) => {
//         setMenuTwo(templateMenu(subMenu));
//     }
//
//     const showMenuTree = (subMenu: { title: string }) => {
//         setMenuTree(templateMenu(subMenu));
//     }
//
//     return (
//         <aside
//             onMouseMove={() => onMouseEnter(item)}
//             onMouseLeave={onMouseLeave}
//             onFocus={() => onMouseEnter(item)}
//             onBlur={onMouseLeave}
//             className={bem.block()}
//         >
//             <h2 className={bem.element('title')}>{item.title}</h2>
//
//             <div className={bem.element('container')}>
//                 <ul>
//                     {menuOne && menuOne.map((subMenu: any, index: number) => {
//                             return (
//                                 <li
//                                     onMouseEnter={() => showMenuTwo(subMenu)}
//                                     key={index}
//                                 >
//                                     {subMenu.title}
//                                 </li>
//                             );
//                         })
//                     }
//                 </ul>
//
//                 <ul>
//                     {menuTwo && menuTwo.map((subMenu: any, index: number) => {
//                             return (
//                                 <li
//                                     onMouseEnter={() => showMenuTree(subMenu)}
//                                     key={index}>
//                                     {subMenu.title}
//                                 </li>
//                             );
//                         })
//                     }
//                 </ul>
//
//                 <ul>
//                     {menuTree && menuTree.map((product: any, index: number) => {
//                             return (
//                                 <li key={index}>
//                                     {product.title}
//                                 </li>
//                             );
//                         })
//                     }
//                 </ul>
//             </div>
//         </aside>
//     );
// };
//
// export default NavMenu;
