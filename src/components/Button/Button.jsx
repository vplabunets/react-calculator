import React from 'react';
import { Btn, Equals, Opt } from './Button.styled';

// const getBtnName = name => {
//   const BtnName = {
//     '=': 'Equals',
//     x: 'Opt',
//     '+': 'Opt',
//     '-': 'Opt',
//     '/': 'Opt',
//     1: 'Btn',
//     2: 'Btn',
//     3: 'Btn',
//     4: 'Btn',
//     5: 'Btn',
//     6: 'Btn',
//     7: 'Btn',
//     8: Btn,
//     9: Btn,
//   };
//   console.log(BtnName[name]);
//   return BtnName[name];
//   // console.log(BtnName);
// };

const Button = ({ value }) => {
  console.log(value);
  // let tag = getBtnName(value);
  // let markup = < {tag} >
  // return setTimeout({<getBtnName(value)/>}, 1000);
  return (
    // ['C', '+-', '%', '/'],
    // [1, 2, 3, 'x'],
    // [4, 5, 6, '-'],
    // [1, 7, 8, '+'],
    // [0, '.', '='],
    <>
      {value === 'C' && <Btn>{value}</Btn>}
      {value === '+-' && <Btn>{value}</Btn>}
      {value === '%' && <Btn>{value}</Btn>}
      {value === '/' && <Opt>{value}</Opt>}
      {value === '+' && <Opt>{value}</Opt>}
      {value === '-' && <Opt>{value}</Opt>}
      {value === 1 && <Btn>{value}</Btn>}
      {value === 2 && <Btn>{value}</Btn>}
      {value === 3 && <Btn>{value}</Btn>}
      {value === 'x' && <Opt>{value}</Opt>}
      {value === 4 && <Btn>{value}</Btn>}
      {value === 5 && <Btn>{value}</Btn>}
      {value === 6 && <Btn>{value}</Btn>}
      {value === 7 && <Btn>{value}</Btn>}
      {value === 8 && <Btn>{value}</Btn>}
      {value === 9 && <Btn>{value}</Btn>}
      {value === '=' && <Equals>{value}</Equals>}
    </>
  );
};
export default Button;
