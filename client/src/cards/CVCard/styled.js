import styled from "styled-components/macro";
import { theme } from "styles/theme";

export const ScCVCard = styled.div`
  padding: 16px;

  width: 100%;

  display: flex;

  border-radius: 8px;
  background-color: #cecece;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h4`
  margin-bottom: 8px;

  font-size: 22px;
  color: ${theme.black};
  font-weight: 700;
`;

export const SubTitleRow = styled.ul`
  margin-bottom: 8px;

  display: flex;
`;
export const SubTitleRowItem = styled.li`
  color: ${theme.black};
  list-style-type: none;

  &:not(:last-child) {
    margin-right: 16px;
  }

  font-weight: 300;

  a,
  span {
    font-weight: 500;
  }
  a {
    color: ${theme.accent};
  }
`;

export const SubTitle = styled.div`
  margin-bottom: 8px;

  font-size: 16px;
  color: ${theme.black};
  font-weight: 300;
  span {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const Avatar = styled.img`
  margin-right: 16px;

  width: 50px;
  height: 50px;

  border-radius: 50%;

  overflow: hidden;
`;

export const Action = styled.a`
  margin-top: 18px;

  color: ${theme.accent};

  transition: all 300ms ease;

  &:hover {
    color: ${theme.accent};

    opacity: 0.75;
    text-decoration: none;
  }
`;
