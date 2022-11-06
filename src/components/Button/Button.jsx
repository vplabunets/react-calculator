import { CalcContext } from 'components/context/CalcContext';
import React from 'react';
import { useContext } from 'react';
import { Btn, Equals, Opt } from './Button.styled';

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);
  //User click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    });
  };

  const resetClick = () => {
    setCalc({
      sign: '',
      num: 0,
      res: 0,
    });
  };

  const handleClickNumber = () => {
    const numberString = value.toString();
    let numberValue;
    if (numberString === '0' && calc.num === '0') {
      numberValue = '0';
    } else {
      numberValue = Number(calc.num + numberString);
    }
    setCalc({
      ...calc,
      num: numberValue,
    });
  };
  //User click operation

  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  //User click equals
  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const results = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          '/': (a, b) => a / b,
          '*': (a, b) => a * b,
        };
        return results[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0,
      });
    }
  };
  //User click percent
  const percentClick = () => {
    setCalc({
      res: calc.res / 100,
      sign: '',
      num: calc.num / 100,
    });
  };

  const invertClick = () => {
    setCalc({
      res: calc.res * -1,
      sign: '',
      num: calc.num * -1,
    });
  };
  const handleBtnClick = () => {
    console.log(value);
    const results = {
      '.': commaClick,
      '&': resetClick,
      '/': signClick,
      '*': signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick,
      '%': percentClick,
      '+-': invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else return handleClickNumber();
  };
  return (
    <>
      {['&', '+-', '%', '.', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(value) && (
        <Btn onClick={handleBtnClick}>{value}</Btn>
      )}
      {['/', '+', '-', '*'].includes(value) && (
        <Opt onClick={handleBtnClick}>{value}</Opt>
      )}
      {['='].includes(value) && (
        <Equals onClick={handleBtnClick}>{value}</Equals>
      )}
    </>
  );
};
export default Button;
