import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './SeoText.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISeoText {

}

const SeoText: React.FC<ISeoText> = ({...props}) => {
    const bem = useBem('SeoText');

    return (
        <article className={bem.block()}>
            <h3 className={bem.element('title')}>Ваш надежный партнер</h3>

            <p className={bem.element('text')}>
                SibMarine предлагает широкий ассортимент судового оборудования и запасных частей,
                сертифицированных по международным стандартам.
                Наша продукция включает все необходимое для обслуживания и ремонта различных типов судов.
                Обладая глубокими знаниями и многолетним опытом, мы гарантируем индивидуальный подход,
                быструю доставку по всей России и профессиональную поддержку.
                Спасибо, что выбрали нас для обеспечения надежности и безопасности вашего флота.
            </p>
        </article>
    );
};

export default SeoText;
