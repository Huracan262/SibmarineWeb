import React, {Fragment} from 'react';

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
                <div></div>
            </Wrapper>
        </section>
    );
};

export default Banner;
