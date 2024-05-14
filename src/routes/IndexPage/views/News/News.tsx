import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './News.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INews {

}

const News: React.FC<INews> = ({...props}) => {
    const bem = useBem('News');

    return (
        <div className={bem.block()}>
            {'News'}
        </div>
    );
};

export default News;
