import { createGlobalStyle } from 'styled-components';

import TTFirsNeueTrlRegularWoff2 from 'assets/fonts/TTFirsNeueTrl-Regular.woff2';
import TTFirsNeueTrlRegularWoff from 'assets/fonts/TTFirsNeueTrl-Regular.woff';

import TTFirsNeueTrlBlackWoff2 from 'assets/fonts/TTFirsNeueTrl-Black.woff2';
import TTFirsNeueTrlBlackWoff from 'assets/fonts/TTFirsNeueTrl-Black.woff';

import TTFirsNeueTrlBoldWoff2 from 'assets/fonts/TTFirsNeueTrl-Bold.woff2';
import TTFirsNeueTrlBoldWoff from 'assets/fonts/TTFirsNeueTrl-Bold.woff';

import TTFirsNeueTrlItWoff2 from 'assets/fonts/TTFirsNeueTrl-It.woff2';
import TTFirsNeueTrlItWoff from 'assets/fonts/TTFirsNeueTrl-It.woff';

import TTFirsNeueTrlLightWoff2 from 'assets/fonts/TTFirsNeueTrl-Light.woff2';
import TTFirsNeueTrlLightWoff from 'assets/fonts/TTFirsNeueTrl-Light.woff';

import NanumPenWoff2 from 'assets/fonts/NanumPen.woff2';
import NanumPenWoff from 'assets/fonts/NanumPen.woff';

export const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: "TT Firs Neue Trl";
  src: url(${TTFirsNeueTrlRegularWoff2}) format("woff2"),
    url(${TTFirsNeueTrlRegularWoff}) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "TT Firs Neue Trl";
  src: url(${TTFirsNeueTrlBlackWoff2}) format("woff2"),
    url(${TTFirsNeueTrlBlackWoff}) format("woff");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "TT Firs Neue Trl";
  src: url(${TTFirsNeueTrlBoldWoff2}) format("woff2"),
    url(${TTFirsNeueTrlBoldWoff}) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "TT Firs Neue Trl";
  src: url(${TTFirsNeueTrlItWoff2}) format("woff2"),
    url(${TTFirsNeueTrlItWoff}) format("woff");
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "TT Firs Neue Trl";
  src: url(${TTFirsNeueTrlLightWoff2}) format("woff2"),
    url(${TTFirsNeueTrlLightWoff}) format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Nanum Pen";
  src: url(${NanumPenWoff2}) format("woff2"),
    url(${NanumPenWoff}) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`
