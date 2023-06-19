import styled from 'styled-components';

export const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;

  li:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ContactButton = styled.button`
  flex-shrink: 0;
  padding: 8px 12px;
  margin-left: 8px;
  margin-right: 8px;
  border: none;
  background-color: #e63946;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #c72c39;
  }
`;
