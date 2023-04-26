import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SwitchLang from '../../components/switchLang/switchLang';

import { Wrapper, IconWrapper, Tooltip, Span } from './networks.style';

function Networks({ networkItems }) {
  return (
    <Wrapper>
      {networkItems.map(({ name, url, icon, className }) => (
        <IconWrapper
          key={className}
          onClick={() => window.open(url, '_blank')}
          className={className}
        >
          <Tooltip>{name}</Tooltip>
          <Span>
            <FontAwesomeIcon icon={icon} />
          </Span>
        </IconWrapper>
      ))}
      <SwitchLang />
    </Wrapper>
  );
}

export default Networks;
