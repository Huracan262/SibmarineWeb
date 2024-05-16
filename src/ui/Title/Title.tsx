import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Link} from '@steroidsjs/core/ui/nav';
import {PiArrowRightThin} from 'react-icons/pi'; // TODO - Пофиксить ошибку импорта

import RoutesId from 'enums/RoutesId';

import './Title.scss';

// TODO - Заменить тип "any"
interface ITitle {
    children: any,
    link?: RoutesId,
}

const Title: React.FC<ITitle> = ({children, link}) => {
    const bem = useBem('Title');

    return (
        <Link
            className={bem.block()}
            toRoute={link}
        >
            <h2 className={bem.element('title')}>
                {children}
                <PiArrowRightThin className={bem.element('icon')} />
            </h2>
        </Link>
    );
};

export default Title;
