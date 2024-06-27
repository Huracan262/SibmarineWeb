import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './NewsPage.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INewsPage {

}

const NewsPage: React.FC<INewsPage> = ({...props}) => {
    const bem = useBem('NewsPage');

    return (
        <div className={bem.block()}>
            {'NewsPage'}
        </div>
    );
};

export default NewsPage;
