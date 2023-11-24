import React from 'react';

import useScroll from 'hooks/useScroll';

import { Wrapper, SpanScroll, SpanGoToTop } from './scrollIndicator.style';

function ScrollIndicator({ mainRef }) {
  const [isScrollBottom, scrollToTop] = useScroll(mainRef);
  /*const lenis = new Lenis()

  const handleScrollToTop = () => {
    lenis.scrollTo({
      duration: 2000,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
  }*/
  return (
    <Wrapper>
      <SpanGoToTop onClick={scrollToTop} />
    </Wrapper>
  );
}

export default ScrollIndicator;
