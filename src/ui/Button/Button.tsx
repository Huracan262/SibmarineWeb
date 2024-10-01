import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Button.scss';

// TODO - Заменить Any
interface IButton {
    children: string,
    onClick?: () => void,
    className?: string,
    type?: 'button' | 'submit',
    disabled?: boolean,
}

const Button: React.FC<IButton> = ({children, onClick, className, disabled = false, type = 'button'}: IButton) => {
    const bem = useBem('Button');

    return (
        <button
            className={`${bem.block()} ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
