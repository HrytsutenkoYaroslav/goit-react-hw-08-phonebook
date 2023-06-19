import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  width: 300px;
  height: 36px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;

  &:focus {
    outline: none;
    border: 2px solid #20a033;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
