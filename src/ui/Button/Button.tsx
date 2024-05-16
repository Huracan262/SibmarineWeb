import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Button.scss';

// TODO - Заменить Any
interface IButton {
    children: string,
    onClick: () => void,
}

const Button: React.FC<IButton> = ({children, onClick}: IButton) => {
    const bem = useBem('Button');

    return (
        <button
            className={bem.block()}
            onClick={() => onClick}
        >
            {children}
        </button>
    );
};

export default Button;
