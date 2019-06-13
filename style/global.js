import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DinAlternate;
    src: url('/static/fonts/din_alternate_medium.ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: DinAlternate;
    src: url('/static/fonts/din_alternate_bold.otf');
    font-weight: 700;
  }

  body {
    margin: 0;
    font-family: DinAlternate;
    font-weight: 400;
    color: ${Colors.WHITE};
  }

  ul {
    padding: 0;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

export default GlobalStyle;
