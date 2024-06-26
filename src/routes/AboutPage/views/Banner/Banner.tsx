import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Wrapper from 'shared/Wrapper';

import './Banner.scss';

interface IBanner {
    className: string,
}

const Banner: React.FC<IBanner> = ({className}) => {
    const bem = useBem('BannerAbout');

    return (
        <section className={bem.block()}>
            <Wrapper>
                <img
                    className={bem.element('img')}
                    src='/images/about/banner.png'
                    alt='logo'
                />
                <h1 className={bem.element('title')}>Sibmarine</h1>
            </Wrapper>
        </section>
    );
};

export default Banner;
