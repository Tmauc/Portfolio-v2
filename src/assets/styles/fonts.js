import { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: "TT Firs Neue Trl Regular";
  src: url(${process.env.PUBLIC_URL + '/assets/fonts/TTFirsNeueTrl-Regular.woff2'}) format("woff2"),url(${process.env.PUBLIC_URL + '/assets/fonts/TTFirsNeueTrl-Regular.woff'}) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "TT Firs Neue Trl Black";
  src: url(${process.env.PUBLIC_URL + '/assets/fonts/TTFirsNeueTrl-Black.woff2'}) format("woff2"),url(${process.env.PUBLIC_URL + '/assets/fonts/TTFirsNeueTrl-Black.woff'}) format("woff");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Nanum Pen";
  src: url(${process.env.PUBLIC_URL + '/assets/fonts/NanumPen.woff2'}) format("woff2"),url(${process.env.PUBLIC_URL + '/assets/fonts/NanumPen.woff'}) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`;
/*
@font-face {
  font-family: "TT Firs Neue Trl Italic";
  src: url(${process.env.PUBLIC_URL + '/assets/fonts/TTFirsNeueTrl-It.woff2'}) format("woff2"),
    url(${process.env.PUBLIC_URL + '/assets/fonts/TTFirsNeueTrl-It.woff2'}) format("woff");
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "TT Firs Neue Trl Bold";
  src: url(${process.env.PUBLIC_URL + '/assets/fonts/TTFirsNeueTrl-Bold.woff2'}) format("woff2"),
    url(${process.env.PUBLIC_URL + '/assets/fonts/TTFirsNeueTrl-Bold.woff2'}) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "TT Firs Neue Trl Light";
  src: url(${process.env.PUBLIC_URL + '/assets/fonts/TTFirsNeueTrl-Light.woff2'}) format("woff2"),
    url(${process.env.PUBLIC_URL + '/assets/fonts/TTFirsNeueTrl-Light.woff2'}) format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
*/
