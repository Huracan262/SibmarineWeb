import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './AtWork.scss';

import Wrapper from 'shared/Wrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAtWork {

}

const AtWork: React.FC<IAtWork> = () => {
    const bem = useBem('AtWork');

    return (
        <main className={bem.block()}>
            <Wrapper className={bem.element('wrapper')}>
                <h1 className={bem.element('title')}>
                    Страница находится в разработке
                </h1>

                <img
                    className={bem.element('img')}
                    src="/images/AtWork.jpg"
                    alt="AtWork"
                />
            </Wrapper>
        </main>
    );
};

export default AtWork;
