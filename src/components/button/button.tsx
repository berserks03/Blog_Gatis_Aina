import React, { FC } from 'react';
import './button.scss';

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  text?: string;
};

const Button:FC<ButtonProps> = ({ className, onClick, text }) => {
  return (
    <button type='button' className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
