import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
* {
  *, *::before, *::after {
  box-sizing: inherit;
}
}

body {
    font-family: "Poppins", sans-serif;
  font-weight: 400;
  background-color: ${({ theme }) => theme.color.whisper};
  word-break: break-word;
}
`;
