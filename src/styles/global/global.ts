import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-shadow: border-box;
  }

  // font-size: 16px; (Desktop)
  // resposividade da minha tela
  html {
    @media (max-width:1080px){
      font-size: 93.75%; //15px
    }

    @media (max-width:720px){
      font-size: 87.5%; //14px
    }
  }

  body {

    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;