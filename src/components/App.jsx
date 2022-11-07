import Button from './Button/Button';
import ButtonBox from './ButtonBox/ButtonBox';
import CalcProvider from './context/CalcContext';
import Screen from './Screen/Screen';
import Wrapper from './Wrapper/Wrapper';
// import { Btn, Equals, Opt } from './Button/Button.styled';
const btnValues = [
  ['С', '+-', '%', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];
export const App = () => {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox btnValues={btnValues}></ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
};
