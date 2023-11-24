import React from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { handleScrollTo } from 'utils/handleScrollTo';

import { Wrapper, SpanScroll, SpanGoToTop } from './scrollIndicator.style';

function ScrollIndicator() {
  const lenis = useLenis();

  return (
    <Wrapper>
      <SpanGoToTop onClick={() => handleScrollTo(lenis, 'top')} />
      {/*<SpanScroll />*/}
    </Wrapper>
  );
}

export default ScrollIndicator;
