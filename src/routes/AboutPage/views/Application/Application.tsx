import React, {useEffect, useState} from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import { BsEnvelopePlusFill } from "react-icons/bs";

import './Application.scss';
import Theme from 'enums/Theme';
import getWhiteModifier from 'utils/getWhiteModifier';
import Wrapper from 'shared/Wrapper';
import SOCIALS_LIST from 'data/SOCIALS_LIST';
import Button from 'ui/Button';
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = 'sibmarine-email-id';
const EMAIL_TEMPLATE_ID = 'template_n4c8iil';
const EMAIL_PUBLIC_KEY = 'g4hhz_Dx7lC27XHkc';

interface IApplication {
    theme: Theme,
}

//todo отправку починить

const Application = ({theme}: IApplication) => {
    const bem = useBem('Application');

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputText, setInputText] = useState('');

    useEffect(() => emailjs.init(EMAIL_PUBLIC_KEY), []);

    const handleSubmit = async (phone: string, email: string, message: string) => {
        try {
            setLoading(true);
            await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, {
                phone,
                email,
                message,
            });
            // alert('email successfully sent check inbox');
            setSuccess(true);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <article className={getWhiteModifier(bem.block(), theme)}>
            <Wrapper className={bem.element('wrapper')}>
                <h2 className={bem.element('title')}>Напишите нам</h2>

                <div className={bem.element('container')}>
                    <form
                        className={bem.element('form')}
                    >
                        <div className={bem.element('block-input')}>
                            <label
                                className='visually-hidden'
                                htmlFor="name"
                            >
                                Ваше имя:
                            </label>

                            <input
                                className={bem.element('input')}
                                type="text"
                                name="name"
                                id="name"
                                maxLength={50}
                                required
                                placeholder="Ваше имя"
                                onChange={(e) => setInputName(e.target.value)}
                            />
                        </div>

                        <div className={bem.element('block-input')}>
                            <label
                                className='visually-hidden'
                                htmlFor="contacts"
                            >
                                Контакты:
                            </label>

                            <input
                                className={bem.element('input')}
                                type="text"
                                name="contacts"
                                id="contacts"
                                maxLength={50}
                                required
                                placeholder="Email / телефон"
                                onChange={(e) => setInputPhone(e.target.value)}
                            />
                        </div>

                        <div className={bem.element('block-input')}>
                            <label
                                className='visually-hidden'
                                htmlFor="text"
                            >
                                Заявка:
                            </label>

                            <input
                                className={bem.element('input')}
                                type="text"
                                name="text"
                                id="text"
                                maxLength={200}
                                required
                                placeholder="Введите ваш запрос"
                                onChange={(e) => setInputText(e.target.value)}
                            />
                        </div>

                        <Button
                            className={bem.element('button')}
                            type="button"
                            onClick={() => handleSubmit(inputPhone, inputPhone, inputText)}
                        >
                            Связаться с нами
                        </Button>

                        <ul className={bem.element('socials-list')}>
                            {SOCIALS_LIST.map((item, index) => (
                                <li
                                    className={bem.element('socials-item')}
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
                    </form>

                    <p className={bem.element('picture')}>
                        <BsEnvelopePlusFill />
                        {/*<img*/}
                        {/*    className={bem.element('img')}*/}
                        {/*    src=""*/}
                        {/*    alt=""*/}
                        {/*/>*/}
                    </p>
                </div>
            </Wrapper>
        </article>
    );
};

export default Application;
