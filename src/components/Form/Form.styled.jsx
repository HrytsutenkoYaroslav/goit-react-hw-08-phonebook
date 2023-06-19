import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 560px;
  padding: 8px;
  
  display: flex;
  flex-direction: column;
  gap: 12px;
  outline: none;
    border: 2px solid #20a033;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 16px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 120px;
  height: 40px;
  background-color: #95b095;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #20a033;
  }
`;
