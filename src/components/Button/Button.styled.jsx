import styled from 'styled-components';

export const Btn = styled.button`
  background: #ffffff;
  height: 3.5rem;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #242424;
  border: none;
  &:hover {
    border: 3px dotted #242424;
  }
`;

export const Equals = styled.button`
  font-size: 16px;
  background: #4db086;
  grid-column: 3/5;
  height: 3.5rem;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => props.color};
  border: none;
  &:hover {
    border: 3px dotted #242424;
  }
`;

export const Opt = styled.button`
  background: #f79505;
  grid-column: 4/5;
  height: 3.5rem;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #242424;
  border: none;
  &:hover {
    border: 3px dotted #242424;
  }
`;

// export const BtnRow = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
