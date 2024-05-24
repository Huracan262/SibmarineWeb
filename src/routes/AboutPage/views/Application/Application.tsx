import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Application.scss';
import Theme from '../../../../enums/Theme';
import getWhiteModifier from '../../../../utils/getWhiteModifier';
import Wrapper from '../../../../shared/Wrapper';
import SOCIALS_LIST from '../../../../data/SOCIALS_LIST';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IApplication {
    theme: Theme,
}

const Application = ({theme}: IApplication) => {
    const bem = useBem('Application');

    return (
        <article className={getWhiteModifier(bem.block(), theme)}>
            <Wrapper>
                <h2 className={bem.element('title')}>Напишите нам</h2>

                <div className={bem.element('container')}>
                    <form className={bem.element('form')}>
                        <div className={bem.element('block-input')}>
                            <label
                                className={'visually-hidden'}
                                htmlFor="name"
                            >
                                Ваше имя:
                            </label>

                            <input
                                className={bem.element('')}
                                type="text"
                                name="name"
                                id="name"
                                maxLength={50}
                                required
                                placeholder="Ваше имя"
                            />
                        </div>

                        <div className={bem.element('block-input')}>
                            <label className={'visually-hidden'} htmlFor="contacts">Контакты:</label>
                            <input className={bem.element('')} type="text" name="contacts" id="contacts" maxLength="50" required
                                   placeholder="Email / телефон"/>
                        </div>

                        <div className={bem.element('block-input')}>
                            <label className={'visually-hidden'} htmlFor="text">Заявка:</label>
                            <input className={bem.element('')} type="text" name="text" id="text" maxLength="200" required
                                   placeholder="Введите ваш запрос"/>
                        </div>

                        <button className={bem.element('')} type="submit">Связаться с нами</button>

                        <ul className={bem.element('')}>
                            {SOCIALS_LIST.map((item, index) => (
                                <li
                                    className={bem.element('')}
                                    key={index}
                                >
                                    <a className={bem.element('')} href={item.url}>
                                        {item.logo}
                                        <span className="visually-hidden">{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </form>

                    <p className={bem.element('')}>
                        Здесь будет картинка
                        <img
                            className={bem.element('')}
                            src=""
                            alt=""
                        />
                    </p>
                </div>
            </Wrapper>
        </article>
    );
};

export default Application;
