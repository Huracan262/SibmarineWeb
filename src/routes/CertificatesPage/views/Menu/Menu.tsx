import React, {useState} from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import certificatesCategory from 'enums/certificatesCategory';
import certificates from 'data/certificates/certificates';

import './Menu.scss';

const Menu = ({activeCategories, setActiveCategories}) => {
    const bem = useBem('Certificates-Menu');
    const categories = Object.values(certificatesCategory);

    const handleCheckboxChange = category => {
        console.log(`До: ${activeCategories}`)

        if (activeCategories.some(cat => cat === category)) {
            setActiveCategories(activeCategories.filter(cat => cat !== category))
        } else {
            setActiveCategories([...activeCategories, category]);
        }

        console.log(`После: ${activeCategories}`)
    };

    return (
        <aside className={bem.block()}>
            <h2 className='visually-hidden'>Фильтр</h2>

            <ul className={bem.element('list')}>
                {categories.map((category, index) => (
                    <li
                        className={bem.element('item')}
                        key={index}
                    >
                        <label className={bem.element('label')}>
                            <input
                                className={bem.element('checkbox')}
                                type='checkbox'
                                onChange={() => handleCheckboxChange(category)}
                            />

                            <span className={bem.element('title')}>
                                {category}
                            </span>

                            <span className={bem.element('number')}>
                                {certificates.filter(cert => cert.category === category).length}
                            </span>
                        </label>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Menu;
