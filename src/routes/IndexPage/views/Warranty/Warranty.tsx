import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import {GiAnchor} from 'react-icons/gi';

import Wrapper from 'shared/Wrapper';
import Title from 'ui/Title';
import WARRANTY_LIST from 'data/WARRANTY_LIST';
import Theme from 'enums/Theme';
import getWhiteModifier from 'utils/getWhiteModifier';

import './Warranty.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IWarranty {
    theme: Theme,
}

const Warranty = ({theme}: IWarranty) => {
    const bem = useBem('Warranty');

    return (
        <section className={getWhiteModifier(bem.block(), theme)}>
            <Wrapper>
                <Title theme={theme}>Гарантии</Title>

                <ul className={bem.element('list')}>
                    {WARRANTY_LIST.map((item, index) => (
                        <li
                            className={bem.element('item')}
                            key={index}
                        >
                            <div className={bem.element('iconContainer')}>
                                <GiAnchor className={bem.element('icon')} />
                            </div>
                            <h3 className={bem.element('title')}>{item.title}</h3>
                            <p className={bem.element('description')}>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </section>
    );
};

export default Warranty;
