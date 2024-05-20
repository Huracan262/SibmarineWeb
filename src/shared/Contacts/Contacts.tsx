import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import useOpenModal from 'hooks/useOpenModal';
import {MAP_MODAL_ID} from 'modals/MapModal/MapModal';

import './Contacts.scss';
import Theme from '../../enums/Theme';

interface IContacts {
    theme?: Theme
}

const Contacts = ({theme}: IContacts) => {
    const bem = useBem('Contacts');

    const openModal = useOpenModal(MAP_MODAL_ID);

    return (
        <address className={bem.block()}>
            <button
                /* TODO - Переписать модификатор на функцию */
                className={`${bem.element('item')} ${theme === Theme.light ? 'light' : ''}`}
                onClick={openModal}
            >
                г. Красноярск, ул. 60 лет Октября д. 90, оф. 2-16
            </button>
            <a
                className={`${bem.element('item')} ${theme === Theme.light ? 'light' : ''}`}
                href="mailto:smtrade@mssc.su"
            >
                smtrade@mssc.su
            </a>
            <a
                className={`${bem.element('item')} ${theme === Theme.light ? 'light' : ''}`}
                href="tel:+739123447073"
            >
                +7 (391) 234-70-73
            </a>
        </address>
    );
};

export default Contacts;
