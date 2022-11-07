import Button from 'components/Button/Button';
import React from 'react';
import { ButtonBoxS } from './ButtonBox.styled';

const ButtonBox = ({ btnValues }) => {
  return (
    <ButtonBoxS>
      {btnValues.flat().map((btn, index) => (
        <Button value={btn} key={index} />
      ))}
    </ButtonBoxS>
  );
};
export default ButtonBox;
