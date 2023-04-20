import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SwitchDarkMode from 'components/switchDarkMode/switchDarkMode';
import { iconsData } from 'constants/iconsData';

import * as constants from 'constants/constants';

import { Wrapper, IconWrapper, Tooltip, Span } from './networks.style';

function Networks({ activeSide, darkMode, setDarkMode }) {
  const displayedIcons = activeSide === constants.LEFT_SIDE
    ? iconsData.slice(0, 4)
    : iconsData.slice(2);

  return (
    <Wrapper>
      {displayedIcons.map(({ name, url, icon, className }) => (
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
      <SwitchDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
    </Wrapper>
  );
}

export default Networks;
