import { ScHeaderHeight } from "modules/Header/styled";
import styled from "styled-components/macro";

export const ScLayout = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  padding-top: ${ScHeaderHeight}px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: ${({ fitContent }) =>
    fitContent ? `calc(100vh - ${ScHeaderHeight}px)` : "auto"};
`;
