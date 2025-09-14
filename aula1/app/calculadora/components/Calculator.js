"use client";

import React, { useState } from 'react';
import styles from './Calculator.module.css';
import Button from './Button';

function Calculator() {
    const [expression, setExpression] = useState('');
    const [display, setDisplay] = useState('0');
    const updateState = (newDisplay, newExpression) => {
        setDisplay(newDisplay);
        setExpression(newExpression);
    };

    const handleClearClick = () => {
        updateState('0', '');
    };

    const handleNumberClick = (number) => {
        const lastChar = display.slice(-1);
        if (display === '0' || ['+', '-', '*', '/'].includes(lastChar)) {
            updateState(String(number), expression + String(number));
        } else {
            updateState(display + String(number), expression + String(number));
        }
    };

    const handleOperatorClick = (op) => {
        // Evita operadores duplicados
        const lastChar = expression.trim().slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) return;

        updateState(op, `${expression} ${op} `);
    };

    const handleSmartParenthesisClick = () => {
        const lastChar = expression.trim().slice(-1);
        const openParenCount = (expression.match(/\(/g) || []).length;
        const closedParenCount = (expression.match(/\)/g) || []).length;

        // Decide se abre '(': se a expressão estiver vazia, ou depois de um operador/outro '('
        if (lastChar === '' || ['+', '-', '*', '/', '('].includes(lastChar)) {
            updateState(display + '(', expression + '(');
        }
        // Decide se fecha ')': se o último caractere for um número e houver parênteses abertos para fechar
        else if (!isNaN(parseInt(lastChar)) && openParenCount > closedParenCount) {
            updateState(display + ')', expression + ')');
        }
    };

    const handleNegateClick = () => {
        // Encontra o último número na expressão para negar
        const parts = expression.split(/([+\-*/()])/).filter(Boolean);
        let lastPart = parts[parts.length - 1].trim();

        if (!isNaN(parseFloat(lastPart))) {
            // Se já for negativo, torna positivo
            if (lastPart.startsWith('-')) {
                lastPart = lastPart.substring(1);
            } else {
                lastPart = `-${lastPart}`;
            }

            parts[parts.length - 1] = ` ${lastPart}`;
            const newExpression = parts.join('');
            updateState(newExpression, newExpression);
        }
    };

    const handlePercentClick = () => {
        // Pega o último número e o divide por 100
        const regex = /((?:\d*\.)?\d+)$/;
        const match = expression.match(regex);

        if (match) {
            const lastNumber = parseFloat(match[0]);
            const result = lastNumber / 100;
            const newExpression = expression.replace(regex, result.toString());
            updateState(newExpression, newExpression);
        }
    };

    const handleEqualClick = () => {
        if (!expression) return;
        try {
            let evalExpression = expression.replace(/\s/g, '');
            if (/[^0-9.+\-*/().]/.test(evalExpression)) {
                throw new Error("Invalid characters");
            }
            const calculate = new Function(`return ${evalExpression}`);
            const result = calculate();
            updateState(String(result), String(result));
        } catch (error) {
            updateState('Error', '');
        }
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.displayContainer}>
                <div className={styles.mainDisplay}>{display}</div>
            </div>
            <div className={styles.buttons}>
                <Button label="AC" onClick={handleClearClick} type="operator" />
                <Button label="()" onClick={handleSmartParenthesisClick} type="operator" />
                <Button label="%" onClick={handlePercentClick} type="operator" />
                <Button label="/" onClick={() => handleOperatorClick('/')} type="operator" />

                <Button label="7" onClick={() => handleNumberClick(7)} />
                <Button label="8" onClick={() => handleNumberClick(8)} />
                <Button label="9" onClick={() => handleNumberClick(9)} />
                <Button label="*" onClick={() => handleOperatorClick('*')} type="operator" />

                <Button label="4" onClick={() => handleNumberClick(4)} />
                <Button label="5" onClick={() => handleNumberClick(5)} />
                <Button label="6" onClick={() => handleNumberClick(6)} />
                <Button label="-" onClick={() => handleOperatorClick('-')} type="operator" />

                <Button label="1" onClick={() => handleNumberClick(1)} />
                <Button label="2" onClick={() => handleNumberClick(2)} />
                <Button label="3" onClick={() => handleNumberClick(3)} />
                <Button label="+" onClick={() => handleOperatorClick('+')} type="operator" />

                <Button label="+/-" onClick={handleNegateClick} />
                <Button label="0" onClick={() => handleNumberClick(0)} />
                <Button label="." onClick={() => handleNumberClick('.')} />
                <Button label="=" onClick={handleEqualClick} type="equal" />
            </div>
        </div>
    );
}

export default Calculator;