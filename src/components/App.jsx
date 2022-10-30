import Button from './Button/Button';
import ButtonBox from './ButtonBox/ButtonBox';
import Screen from './Screen/Screen';
import Wrapper from './Wrapper/Wrapper';
import { Btn, Equals, Opt } from './Button/Button.styled';
const btnValues = [
  ['C', '+-', '%', '/'],
  [1, 2, 3, 'x'],
  [4, 5, 6, '-'],

  [1, 7, 8, '+'],
  [0, '.', '='],
];
export const App = () => {
  return (
    <div>
      <Wrapper>
        <Screen />

        <ButtonBox>
          {btnValues.flat().map((btn, index) => {
            return <Button value={btn} key={index} />;
          })}
        </ButtonBox>
      </Wrapper>
    </div>
  );
};
