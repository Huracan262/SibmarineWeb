import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import useOpenModal from 'hooks/useOpenModal';

import './Contacts.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IContacts {

}

const Contacts: React.FC<IContacts> = ({...props}) => {
    const bem = useBem('Contacts');

    return (
        <address className={bem.block()}>
            <button
                className={bem.element('item')}
                onClick={useOpenModal()}
            >
                    г. Красноярск, ул. 60 лет Октября д. 90, оф. 2-16
            </button>
            <a
                className={bem.element('item')}
                href="mailto:smtrade@mssc.su"
            >
                smtrade@mssc.su
            </a>
            <a
                className={bem.element('item')}
                href="tel:+739123447073"
            >
                +7 (391) 234-70-73
            </a>
        </address>
    );
};

export default Contacts;
