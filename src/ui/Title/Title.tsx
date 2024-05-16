import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Title.scss';
import {Link} from '@steroidsjs/core/ui/nav';

// TODO - Заменить тип "any"
interface ITitle {
    children?: any,
    link?: any,
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
                {/*<PiArrowRightThin className={styles.arrow} />*/}
            </h2>
        </Link>
    );
};

export default Title;
