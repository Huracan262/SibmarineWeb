import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Application.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IApplication {

}

const Application: React.FC<IApplication> = ({...props}) => {
    const bem = useBem('Application');

    return (
        <article className={bem.block()}>
            <div className={styles.wrapper}>
                <h2 className={styles.writeTitle}>Напишите нам</h2>

                <div className={styles.writeContainer}>
                    <form className={styles.writeForm}>
                        <div className={styles.writeBlock}>
                            <label className={'visually-hidden'} htmlFor="name">Ваше имя:</label>
                            <input className={styles.input} type="text" name="name" id="name" maxLength="50" required
                                   placeholder="Ваше имя"/>
                        </div>

                        <div className={styles.writeBlock}>
                            <label className={'visually-hidden'} htmlFor="contacts">Контакты:</label>
                            <input className={styles.input} type="text" name="contacts" id="contacts" maxLength="50" required
                                   placeholder="Email / телефон"/>
                        </div>

                        <div className={styles.writeBlock}>
                            <label className={'visually-hidden'} htmlFor="text">Заявка:</label>
                            <input className={styles.input} type="text" name="text" id="text" maxLength="200" required
                                   placeholder="Введите ваш запрос"/>
                        </div>

                        <button className={styles.writeButton} type="submit">Связаться с нами</button>

                        <ul className={styles.writeList}>
                            {SOCIALS_LIST.map(item => (
                                <li className={styles.writeItem} key={item.name}>
                                    <a className={styles.writeLink} href={item.url}>
                                        {item.logo}
                                        <span className="visually-hidden">{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </form>

                    <p className={styles.writePicture}>
                        Здесь будет картинка
                        <img className={styles.writeImg} src="" alt=""/>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Application;
