import React from 'react';
import './button.css';

const Button = ({ label, variant }) => {
  return (
    <button className={variant === 'outlinex' ? 'buttons' : 'buttons2'}>
      {label}
    </button>
  );
};

export default Button;
