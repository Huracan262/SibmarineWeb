import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Footer.scss';
import Wrapper from '../../../Wrapper';
import Logo from 'ui/Logo';
import SOCIALS_LIST from 'data/SOCIALS_LIST';
import Contacts from '../../../Contacts';
import NavList from './views/NavList';
import DATA from '../../../../data/DATA';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFooter {

}

const Footer: React.FC<IFooter> = ({...props}) => {
    const bem = useBem('Footer');

    return (
        <footer className={bem.block()}>
            <Wrapper>
                <div className={bem.element('container')}>
                    <div className={bem.element('contacts')}>
                        <Logo color='white' />

                        <Contacts />

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

                {/*<Copyright />*/}
            </Wrapper>
        </footer>
    )
}

export default Footer;

