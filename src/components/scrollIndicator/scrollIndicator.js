import React from 'react';
import { useLenis } from '@studio-freight/react-lenis';

import { Wrapper, SpanScroll, SpanGoToTop } from './scrollIndicator.style';

function ScrollIndicator() {
  const lenis = useLenis();

  const handleScrollToTop = () => {
    lenis.scrollTo('top', {
      duration: 2000,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
  }
  return (
    <Wrapper>
      <SpanGoToTop onClick={handleScrollToTop} />
    </Wrapper>
  );
}

export default ScrollIndicator;
