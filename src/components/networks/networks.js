import React from 'react';

import { Wrapper, IconWrapper, Span } from './networks.style';

function Networks({ networkItems }) {

  return (
    <Wrapper isMobile >
      {networkItems.map(({ color, url, icon, className }) => (
        <IconWrapper
          key={className}
          onClick={() => window.open(url, '_blank')}
          color={color}
        >
          <Span color={color} className='clickable'>
            {icon}
          </Span>
        </IconWrapper>
      ))}
    </Wrapper>
  );
}

export default Networks;
