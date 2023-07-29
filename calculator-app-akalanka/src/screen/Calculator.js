import React, { useState } from 'react';
import './styles.css';

const Calculator = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const handleValue1Change = (event) => {
    setValue1(event.target.value);
  };

  const handleValue2Change = (event) => {
    setValue2(event.target.value);
  };

  const handleOperatorChange = (selectedOperator) => {
    setOperator(selectedOperator);
  };

  const handleCalculate = () => {
    if (value1 !== '' && value2 !== '') {
      const num1 = parseFloat(value1);
      const num2 = parseFloat(value2);

      switch (operator) {
        case '+':
          setResult((num1 + num2).toString());
          break;
        case '-':
          setResult((num1 - num2).toString());
          break;
        case '*':
          setResult((num1 * num2).toString());
          break;
        case '/':
          if (num2 === 0) {
            setResult('Error: Division by zero');
          } else {
            setResult((num1 / num2).toString());
          }
          break;
        default:
          setResult('Error: Invalid operator');
          break;
      }
    } else {
      setResult('Error: Please enter both values');
    }
  };

  const handleClearInput = () => {
    setValue1('');
    setValue2('');
  };

  const handleClearResult = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <h1 className='topic'>MathFundementals by Akalanka</h1>
      <div className="input-container">
        <input
          type="text"
          value={value1}
          onChange={handleValue1Change}
          inputMode="numeric"
        />
        <button
          className={operator === '+' ? 'active' : ''}
          onClick={() => handleOperatorChange('+')}
        >
          +
        </button>
        <button
          className={operator === '-' ? 'active' : ''}
          onClick={() => handleOperatorChange('-')}
        >
          -
        </button>
        <button
          className={operator === '*' ? 'active' : ''}
          onClick={() => handleOperatorChange('*')}
        >
          *
        </button>
        <button
          className={operator === '/' ? 'active' : ''}
          onClick={() => handleOperatorChange('/')}
        >
          /
        </button>
        <input
          type="text"
          value={value2}
          onChange={handleValue2Change}
          inputMode="numeric"
        />
      </div>
      <div className="buttons">
        <button className='calculate' onClick={handleCalculate}>Calculate</button>
        <button className="reset" onClick={handleClearInput}>
          Reset Input
        </button>
        <button className="reset" onClick={handleClearResult}>
          Reset Result
        </button>
      </div>
      <h2 className='results'>Result: {result}</h2>
      <p className='copyright'>This is a complete work of akalanka using react.js</p>
    </div>
    
  );
};

export default Calculator;
