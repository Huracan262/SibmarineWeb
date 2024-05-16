import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './News.scss';
import Wrapper from '../../../../shared/Wrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INews {

}

const News: React.FC<INews> = ({...props}) => {
    const bem = useBem('News');

    return (
        <div className={bem.block()}>
            <Wrapper>
                {'News'}
            </Wrapper>
        </div>
    );
};

export default News;
