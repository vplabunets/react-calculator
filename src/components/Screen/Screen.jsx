import { CalcContext } from 'components/context/CalcContext';
import React, { useContext } from 'react';
import { ScreenS } from './Screen.styled';

const Screen = () => {
  const { calc } = useContext(CalcContext);
  return <ScreenS>{calc.num ? calc.num : calc.res}</ScreenS>;
};

export default Screen;
