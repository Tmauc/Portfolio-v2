import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa';

import { AlignWrapper, WrapperActiveBar, Scroll } from './activeBar.style';


function ActiveBar() {
  const [t] = useTranslation();

  return (
    <AlignWrapper>
      <WrapperActiveBar>
        <FaArrowLeft />
        <Scroll>{t('activeBar')}</Scroll>
      </WrapperActiveBar>
    </AlignWrapper>
  );
}

export default ActiveBar;
