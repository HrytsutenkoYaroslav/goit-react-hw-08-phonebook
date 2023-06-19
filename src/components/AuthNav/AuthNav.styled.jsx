import styled from "styled-components";

export const AuthNavBlock = styled.nav`
  display: flex;
  gap: 16px;

  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s;

    &:hover {
      color: #4fa94d;
    }

    &.active {
      color: #4fa94d;
    }
  }
`;
