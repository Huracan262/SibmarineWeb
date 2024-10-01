import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Link} from '@steroidsjs/core/ui/nav';

import './Copyright.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICopyright {

}

const Copyright: React.FC<ICopyright> = ({...props}) => {
    const bem = useBem('Copyright');

    return (
        <div className={bem.block()}>
            <p className={bem.element('text')}>© 2024 Сибмарин-Трейд. Все права защищены. Копирование любого
                материала с сайта допускается только с письменного разрешения администрации сайта.</p>

            <Link className={bem.element('link')}>Политика конфиденциальности</Link>

            <p className={bem.element('author')}>
                <span className={bem.element('description')}>Сайт создал:</span>
                <a className={bem.element('author-link')} href="https://t.me/Huracan262">Григорий</a>
            </p>
        </div>
    );
};

export default Copyright;
