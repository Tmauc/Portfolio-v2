import React from 'react';

import SwitchLang from 'components/switchLang/switchLang';
import useDeviceType from 'hooks/useDeviceType';

import { Wrapper, IconWrapper, Tooltip, Span } from './networks.style';

function Networks({ networkItems }) {
  const { isMobile } = useDeviceType();
  return (
    <Wrapper isMobile>
      {networkItems.map(({ name, url, icon, className }) => (
        <IconWrapper
          key={className}
          onClick={() => window.open(url, '_blank')}
          className={className}
        >
          <Tooltip>{name}</Tooltip>
          <Span>
            {icon}
          </Span>
        </IconWrapper>
      ))}
      {!isMobile && <SwitchLang />}
    </Wrapper>
  );
}

export default Networks;
