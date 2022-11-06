import React, { createContext, useState } from 'react';

export const CalcContext = createContext();
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0,
  });
  //   const [sign, setSign] = useState('');
  //   const [num, setNum] = useState(0);
  //   const [res, setRes] = useState(0);
  const providerValue = {
    calc,
    setCalc,
    // sign,
    // setSign,
    // num,
    // setNum,
    // res,
    // setRes,
  };

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
