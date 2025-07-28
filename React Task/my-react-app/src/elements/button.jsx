import React from 'react';
import './button.css';

const Button = ({ label }) => {
  return (
    <button className="buttons">
      {label}
    </button>
  );
};

export default Button;
