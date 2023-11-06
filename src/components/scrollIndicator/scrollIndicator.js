import React from 'react'

import useScroll from 'hooks/useScroll';

import { Wrapper, SpanScroll, SpanGoToTop } from './scrollIndicator.style'

function ScrollIndicator({ mainRef }) {
  const [isScrollBottom, scrollToTop] = useScroll(mainRef);

  return (
    <Wrapper>
      {isScrollBottom ?
        <SpanGoToTop onClick={scrollToTop} className='clickable' />
        :
        <SpanScroll />
      }
    </Wrapper>
  )
}

export default ScrollIndicator
