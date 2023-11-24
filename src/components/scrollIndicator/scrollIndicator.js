import React from 'react';

import { Wrapper, SpanScroll } from './scrollIndicator.style';

function ScrollIndicator() {
  return (
    <Wrapper>
      {/*<SpanGoToTop onClick={() => handleScrollTo(lenis, 'top')} />*/}
      <SpanScroll />
    </Wrapper>
  );
}

export default ScrollIndicator;
