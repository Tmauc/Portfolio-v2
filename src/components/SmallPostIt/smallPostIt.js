import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  ITSME_ARROW,
  WATCH_ARROW,
  REYES_PULL,
} from 'constants/constants';

import { Wrapper, Img, Text } from './smallPostIt.style';

function SmallPostIt({ svgSRC, type, activeSide }) {
  const [t] = useTranslation();

  return (
    <Wrapper type={type} activeSide={activeSide}>
      {type === ITSME_ARROW &&
        <>
          <Text activeSide={activeSide} type={type}>{t('smallPostIt.itsMe')}</Text>
          <Img width="100px" height="100px" activeSide={activeSide} alt="Arrow SVG to point my picture" src={svgSRC} type={type} />
        </>
      }
      {type === WATCH_ARROW &&
        <>
          <Text type={type}>{t('smallPostIt.niceWatch')}</Text>
          <Img width="80px" height="80px" alt="Arrow SVG to point my watch" src={svgSRC} type={type} />
        </>
      }
      {type === REYES_PULL &&
        <>
          <Text type={type}>{t('smallPostIt.sweaterReyes')}</Text>
          <Img width="80px" height="80px" alt="Arrow SVG to point my watch" src={svgSRC} type={type} />
        </>
      }
    </Wrapper>
  );
}

export default SmallPostIt;
