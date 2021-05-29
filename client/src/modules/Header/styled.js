import styled from "styled-components/macro";

export const ScHeaderHeight = 50;

export const ScHeader = styled.div`
  padding: 5px 15px;

  position: fixed;
  top: 0;
  left: 0;
  background-color:  rgb(248, 248, 248);
  width: 100%;
  height: ${ScHeaderHeight}px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing:1px;

  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.33);
`;

export const ScNavItem = styled.a`
    color: black;
  &.active {
    padding: 20px;
  }
`;
