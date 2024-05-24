import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Banner.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IBanner {

}

const Banner: React.FC<IBanner> = ({...props}) => {
    const bem = useBem('Banner');

    return (
        <section className={bem.block()}>
            <div className={styles.wrapper}>
                <h1 className={styles.aboutTitle}>
                    Небольшой текст или слоган
                </h1>

                <img className={styles.aboutImg} src="" alt=""/>

                <div className={styles.aboutDescription}>
                    <p className={styles.aboutDescription1}>Наша компания — это команда профессионалов, работающих в сфере
                        (укажите сферу деятельности компании). Мы
                        предоставляем широкий спектр услуг и товаров, которые отличаются высоким качеством и соответствуют всем
                        стандартам</p>

                    <p className={styles.aboutDescription2}>Миссия нашей компании — предоставлять клиентам наилучший</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
