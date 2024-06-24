import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Description.scss';

interface IDescription {
    item: any, // TODO - any
}

const Description: React.FC<IDescription> = ({item}) => {
    const bem = useBem('Info');

    return (
        <>
            <p className={bem.element('description')}>
                {item.description}
            </p>

            <div className={bem.element('container')}>
                <img
                    className={bem.element('rko-logo')}
                    src='/images/itemPage/PKO-PPP.png'
                    alt="РКО"
                />

                <small className={bem.element('license')}>
                    Оборудование имеет сертификат РКО
                </small>
            </div>
        </>
    );
};

export default Description;
