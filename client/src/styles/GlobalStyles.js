import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  :root{
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, &:before, &:after {
    box-sizing: border-box;

    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body{
    width: 100%;
    height: 100%;
    min-height: 100vh;

    overflow-x: hidden;

    display: flex;

  }

  #root{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
  }

  img{
    display: block;
    object-fit: cover;
    object-position: center center;
    user-select: none;
  }

  a{
    text-decoration: none;
    &:focus, &:hover {
      outline: none;
    }
  }

  input, textarea{
    -webkit-appearance: none; /* safari shadows */
    -moz-appearance: none; /* safari shadows */
    appearance: none; /* safari shadows */


    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: transparent;

    &:focus, &:hover {
        outline: none;
      }
  }

  button{
    border: none;
    user-select: none;
    &:focus, &:hover {
      outline: none;
    }
  }
`;
