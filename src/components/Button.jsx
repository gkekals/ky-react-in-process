import React from 'react';

const Button = ({ text, color = 'gray', children }) => {
    const onClickButton = () => {
        console.log(text);
    };
    return (
        <button style={{ color }} onClick={onClickButton}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

export default Button;
