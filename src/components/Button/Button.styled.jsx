import styled from 'styled-components';

export const Btn = styled.button`
  font-size: 25px;
  background-color: #ffffff;
  height: 3.5rem;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #242424;
  border: 0px solid white;
  transition: border 250ms linear;
  &:hover {
    border: 3px solid #f79505;
  }
`;

export const Equals = styled.button`
  font-size: 25px;
  background: #4db086;
  grid-column: 3/5;
  height: 3.5rem;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0px solid #4db086;
  transition: border 250ms linear;
  &:hover {
    border: 3px solid #f79505;
  }
`;

export const Opt = styled.button`
  background: #f79505;
  font-size: 25px;
  grid-column: 4/5;
  height: 3.5rem;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #242424;
  border: 0px solid #f79505;
  transition: border 250ms linear;
  &:hover {
    border: 3px solid #4db086;
  }
`;
