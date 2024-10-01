import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Wrapper from 'shared/Wrapper';
import Title from 'ui/Title';
import Theme from 'enums/Theme';
import NEWS_LIST from 'data/NEWS_LIST';
import getWhiteModifier from 'utils/getWhiteModifier';

import NewsElement from './views/NewsElement';

import './News.scss';
import RouteId from '../../../../enums/RouteId';

interface INews {
    theme?: Theme,
}

const News = ({theme}: INews) => {
    const bem = useBem('News');

    return (
        <article className={getWhiteModifier(bem.block(), theme)}>
            <Wrapper>
                <Title
                    theme={theme}
                    link={RouteId.NEWS}
                >
                    Новости
                </Title>

                {NEWS_LIST.map((item, index) => (
                    <NewsElement
                        element={item}
                        key={index}
                    />
                ))}
            </Wrapper>
        </article>
    );
};

export default News;
