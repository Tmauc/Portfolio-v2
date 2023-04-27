import React from 'react';
import { useTranslation } from 'react-i18next';

import { AlignWrapper, WrapperActiveBar, Scroll } from './activeBar.style';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ActiveBar() {
  const [t] = useTranslation();

  return (
    <AlignWrapper>
      <WrapperActiveBar>
        {/*<FontAwesomeIcon icon={faArrowLeft} />*/}
        <Scroll>{t('activeBar')}</Scroll>
      </WrapperActiveBar>
    </AlignWrapper>
  );
}

export default ActiveBar;
