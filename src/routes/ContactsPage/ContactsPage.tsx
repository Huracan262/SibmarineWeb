import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './ContactsPage.scss';
import Wrapper from '../../shared/Wrapper';
import {FaDownload} from 'react-icons/fa';
import SOCIALS_LIST from '../../data/SOCIALS_LIST';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IContactsPage {

}

const ContactsPage: React.FC<IContactsPage> = ({...props}) => {
    const bem = useBem('ContactsPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <h1 className={bem.element('title')}>Контакты</h1>

                <div className={bem.element('container')}>
                    <table className={bem.element('table')}>
                        <tbody>
                            <tr className={bem.element('tr')}>
                                <th className={bem.element('th')}>Адрес</th>
                                <td className={bem.element('td')}>
                                    г. Красноярск, ул. 60 лет Октября д. 90, оф. 2-16
                                </td>
                            </tr>
                            <tr className={bem.element('tr')}>
                                <th className={bem.element('th')}>Телефон</th>
                                <td className={bem.element('td')}>
                                    <a className={bem.element('link')} href="tel:+739123447073">+7 (391) 234-70-73</a>
                                </td>
                            </tr>
                            <tr className={bem.element('tr')}>
                                <th className={bem.element('th')}>E-mail</th>
                                <td className={bem.element('td')}>
                                    <a className={bem.element('link')} href="mailto:smtrade@mssc.su">smtrade@mssc.su</a>
                                </td>
                            </tr>
                            <tr className={bem.element('tr')}>
                                <th className={bem.element('th')}>Часы работы</th>
                                <td className={bem.element('td')}>
                                    Пн-Сб: c 9:00 до 18:00
                                </td>
                            </tr>
                            <tr className={bem.element('tr')}>
                                <th className={bem.element('th')}>Мессенджеры</th>
                                <td className={bem.element('td')}>
                                    <ul className={bem.element('socialsList')}>
                                        {SOCIALS_LIST.map((item, index: number) => (
                                            <li
                                                className={bem.element('socialsItem')}
                                                key={index}
                                            >
                                                <a className={bem.element('socialsLink')} href={item.url}>
                                                    {item.logo}
                                                    <span className="visually-hidden">{item.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className={bem.element('buttonDownload')}> {/* Временно (div) */}
                        <div className={bem.element('download')}>
                            <FaDownload className={bem.element('icon')}/>

                            Скачать реквизиты
                        </div>
                    </div>
                </div>

                <iframe
                    className={bem.element('map')}
                    src="https://yandex.ru/map-widget/v1/?ll=92.869438%2C55.978822&mode=search&oid=5984820350&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXVY4ZaPN1dAEeif4GJF%2FUtAEhIJ8IgK1c3Fjz8RDMwKRbqfcz8iBgABAgMEBSgKOABAqs0GSAFqAnJ1nQHNzEw9oAEAqAEAvQFB0i%2BGwgELrbOw%2Bf8F%2FrjkpRaCAhDQodC40LHQnNCw0YDQuNC9igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=92.869438%2C55.978822&sspn=0.009894%2C0.004171&tab=reviews&text=%D0%A1%D0%B8%D0%B1%D0%9C%D0%B0%D1%80%D0%B8%D0%BD&z=17.19"
                    width="1000"
                    height="500"
                    allowFullScreen
                />
            </Wrapper>
        </main>
    );
};

export default ContactsPage;
