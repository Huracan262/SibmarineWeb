import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Wrapper from 'shared/Wrapper';
import Title from 'ui/Title';
import getWhiteModifier from 'utils/getWhiteModifier';

import './News.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INews {

}

const News: React.FC<INews> = ({...props}) => {
    const bem = useBem('News');

    return (
        <section className={getWhiteModifier(bem.block(), true)}>
            <Wrapper>
                <Title white>Новости</Title>
            </Wrapper>
        </section>
    );
};

export default News;
