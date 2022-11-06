import { CalcContext } from 'components/context/CalcContext';
import React, { useContext } from 'react';
// import { Textfit } from 'react-textfit';
import { ScreenS } from './Screen.styled';

const Screen = () => {
  const { calc } = useContext(CalcContext);
  return <div max={70}>{calc.num ? calc.num : calc.res}</div>;
};

export default Screen;
