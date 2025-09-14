"use client";

import React from 'react';
import styles from './Button.module.css';

function Button({ label, onClick, type }) {
    // Define a classe CSS com base no 'type' do botão (operador, numero, etc.)
    const buttonClass = `${styles.button} ${
        type === 'operator' ? styles.operator : ''
    } ${type === 'double' ? styles.double : ''} ${
        type === 'equal' ? styles.equal : ''
    }`;

    return (
        <button className={buttonClass} onClick={() => onClick(label)}>
            {label}
        </button>
    );
}

export default Button;