import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Logo from 'ui/Logo';
import Wrapper from 'shared/Wrapper';
import Contacts from 'shared/Contacts';
import Button from 'ui/Button';

import './Header.scss';
import useOpenModal from 'hooks/useOpenModal';
import {APPLICATION_FORM_MODAL_ID} from 'modals/ApplicationFormModal/ApplicationFormModal';
import MainNavigation from './views/MainNavigation';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IHeader {

}

const Header: React.FC<IHeader> = ({...props}) => {
    const bem = useBem('Header');
    const openModal = useOpenModal(APPLICATION_FORM_MODAL_ID);

    return (
        <header className={bem.block()}>
            <Wrapper className={bem.element('wrapper')}>
                <Logo
                    className={bem.element('logo')}
                    size='150'
                    color='white'
                />

                <div className={bem.element('container')}>
                    <div className={bem.element('row-top')}>
                        <Contacts />

                        <Button onClick={openModal}>
                            Оставить заявку
                        </Button>
                    </div>

                    <div className={bem.element('row-bottom')}>
                        <input
                            className={bem.element('search')}
                            type='text'
                            placeholder='Поиск'
                        />
                        <MainNavigation />
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;
