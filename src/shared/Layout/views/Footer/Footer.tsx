import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Logo from 'ui/Logo';
import SOCIALS_LIST from 'data/SOCIALS_LIST';
import DATA from 'data/DATA';

import NavList from './views/NavList';
import Copyright from './views/Copyright';

import Contacts from '../../../Contacts';
import Wrapper from '../../../Wrapper';

import './Footer.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFooter {

}

const Footer: React.FC<IFooter> = ({...props}) => {
    const bem = useBem('Footer');

    return (
        <footer className={bem.block()}>
            <Wrapper>
                <div className={bem.element('container')}>
                    <div className={bem.element('container2')}>
                        <Logo size='200' color='white' />

                        <Contacts className={bem.element('contacts')} />

                        <ul className={bem.element('socials-list')}>
                            {SOCIALS_LIST.map((item, index) => (
                                <li
                                    className={bem.element('social')}
                                    key={index}
                                >
                                    <a
                                        className={bem.element('social-link')}
                                        href={item.url}
                                    >
                                        {item.logo}

                                        <span className="visually-hidden">{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={bem.element('nav-lists')}>
                        {DATA.map((item, index) => (
                            <NavList item={item} key={index} />
                        ))}
                    </div>
                </div>

                <Copyright />
            </Wrapper>
        </footer>
    )
}

export default Footer;
