import styled from "styled-components/macro";

export const ScUser = styled.div`

display: flex;
align-items: center;

`;

export const UserSimple = styled.div`

display: flex;
align-items: center;

`;

export const AvatarImage = styled.div`
    margin-right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    font-size: 20px;

    color: #000;
    border: 2px solid #000;
    border-radius: 50%;

    text-decoration: none;
    &:hover {
      text-decoration: none;
    };

    span{
      color: #000;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      };
    }

`;
