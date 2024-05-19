import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Button.scss';

// TODO - Заменить Any
interface IButton {
    children: string,
    onClick?: () => void,
    className?: string,
    disabled?: boolean,
}

const Button: React.FC<IButton> = ({children, onClick, className, disabled = false}: IButton) => {
    const bem = useBem('Button');

    return (
        <button
            className={`${bem.block()} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
