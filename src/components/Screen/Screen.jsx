import { CalcContext } from 'components/context/CalcContext';
import React, { useContext } from 'react';
import { ScreenS } from './Screen.styled';
import useFitText from 'use-fit-text';

const Screen = () => {
  const { calc } = useContext(CalcContext);
  const { fontSize, ref } = useFitText();
  return (
    <ScreenS>
      <div
        ref={ref}
        style={{
          fontSize,
          height: 64,
          width: 265,
          // display: 'flex',
          alignItems: 'center',
          // flexDirection: 'row-reverse',
          // justifyContent: 'right',
        }}
      >
        {calc.num ? calc.num : calc.res}
      </div>
    </ScreenS>
  );
};

export default Screen;
