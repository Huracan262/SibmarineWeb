import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Wrapper from 'shared/Wrapper';

import './Banner.scss';

interface IBanner {
    className: string,
}

const Banner: React.FC<IBanner> = ({className}) => {
    const bem = useBem('Banner');

    return (
        <section className={bem.block()}>
            <Wrapper className={`${bem.element('wrapper')} ${className}`}>
                <h1 className={bem.element('title')}>
                    Небольшой текст или слоган
                </h1>

                <img
                    className={bem.element('img')}
                    src=""
                    alt=""
                />

                <div className={bem.element('container')}>
                    <p className={bem.element('description1')}>Наша компания — это команда профессионалов, работающих в сфере
                        (укажите сферу деятельности компании). Мы
                        предоставляем широкий спектр услуг и товаров, которые отличаются высоким качеством и соответствуют всем
                        стандартам</p>

                    <p className={bem.element('description2')}>Миссия нашей компании — предоставлять клиентам наилучший</p>
                </div>

            </Wrapper>
        </section>
    );
};

export default Banner;
