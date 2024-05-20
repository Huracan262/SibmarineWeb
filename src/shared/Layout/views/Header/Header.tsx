import React, {useState} from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Logo from 'ui/Logo';
import Wrapper from 'shared/Wrapper';
import Contacts from 'shared/Contacts';
import Button from 'ui/Button';

import './Header.scss';
import useOpenModal from 'hooks/useOpenModal';
import {APPLICATION_FORM_MODAL_ID} from 'modals/ApplicationFormModal/ApplicationFormModal';
import MainNavigation from './views/MainNavigation';
import NavMenu from './views/NavMenu';
import NavMenuContext from '../../../../contexts/NavMenuContext';
import Theme from '../../../../enums/Theme';

interface IHeader {
    theme?: Theme,
}

const Header = ({theme} : IHeader) => {
    const bem = useBem('Header');

    const openModal = useOpenModal(APPLICATION_FORM_MODAL_ID);

    const [navMenuItem, setNavMenuItem] = useState(null);
    const [timerId, setTimerId] = useState(null);

    return (
        <header className={`${bem.block()} ${theme === Theme.light ? 'light' : ''}`}> {/* TODO - Переписать на getWhiteModifier*/}
            <NavMenuContext.Provider value={{
                navMenuItem,
                setNavMenuItem,
                timerId,
                setTimerId}}
            >
                <Wrapper className={bem.element('wrapper')}>
                    <Logo
                        className={bem.element('logo')}
                        size='150'
                        color={theme === Theme.light ? '#333333' : '#ffffff'}
                    />

                    <div className={bem.element('container')}>
                        <div className={bem.element('row-top')}>
                            <Contacts theme={theme} />

                            <Button
                                className={bem.element('button')}
                                onClick={openModal}
                            >
                                Оставить заявку
                            </Button>
                        </div>

                        <div className={bem.element('row-bottom')}>
                            <input
                                className={bem.element('search')}
                                type='text'
                                placeholder='Поиск'
                            />

                            <MainNavigation theme={theme} setNavMenuItem={setNavMenuItem} navMenuItem={navMenuItem} />
                        </div>
                    </div>

                    {navMenuItem && <NavMenu theme={theme} item={navMenuItem} />}
                </Wrapper>
            </NavMenuContext.Provider>
        </header>
    );
};

export default Header;
