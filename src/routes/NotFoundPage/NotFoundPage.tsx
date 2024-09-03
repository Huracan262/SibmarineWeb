import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './NotFoundPage.scss';

import Wrapper from 'shared/Wrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INotFoundPage {

}

const NotFoundPage: React.FC<INotFoundPage> = () => {
    const bem = useBem('NotFoundPage');

    return (
        <main className={bem.block()}>
            <Wrapper className={bem.element('wrapper')}>
                <h1 className={bem.element('title')}>
                    Страница<br />
                    не&nbsp;найдена
                    <div className={bem.element('notfound')}>404</div>
                </h1>

                <img
                    className={bem.element('img')}
                    src="/images/NotFoundPage.png"
                    alt="Page not found"
                />
            </Wrapper>
        </main>
    );
};

export default NotFoundPage;
