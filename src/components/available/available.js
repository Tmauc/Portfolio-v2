import React from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper, WrapperStatus, Status, TextCircle } from './available.style';

function Available() {
  const [t] = useTranslation();
  const isAvailable = true;

  return (
    <Wrapper>
      <WrapperStatus>
        <Status available={isAvailable} />
      </WrapperStatus>
      <TextCircle viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <path
            id="circle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text font-size="17">
          <textPath xlinkHref="#circle">
            {isAvailable
              ? t('freelance.available')
              : t('freelance.unavailable')}
          </textPath>
        </text>
      </TextCircle>
    </Wrapper>
  );
}

export default Available;
