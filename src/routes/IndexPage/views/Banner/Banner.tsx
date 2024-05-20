import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Wrapper from 'shared/Wrapper';

import './Banner.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IBanner {

}

const Banner: React.FC<IBanner> = ({...props}) => {
    const bem = useBem('Banner');

    return (
        <section className={bem.block()}>
            <video className={bem.element('background-video')} src={`videos/background.mp4`} loop autoPlay muted/>

            <Wrapper>
                <h1 className={bem.element('title')}>
                    Полный цикл<br/>
                    <span className={''}>обслуживания водного транспорта<br/>
                        от проектирования до реализации</span>
                </h1>
            </Wrapper>
        </section>
    );
};

export default Banner;
