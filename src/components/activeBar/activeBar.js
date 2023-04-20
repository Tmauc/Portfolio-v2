import React from 'react';
import { AlignWrapper, WrapperActiveBar, Scroll } from './activeBar.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ActiveBar() {
  return (
    <AlignWrapper>
      <WrapperActiveBar>
        <FontAwesomeIcon icon={faArrowLeft} />
        <Scroll>Swap personality</Scroll>
      </WrapperActiveBar>
    </AlignWrapper>
  );
}

export default ActiveBar;
