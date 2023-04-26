import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  NAVBAR_ABOUT,
  NAVBAR_CONTACT,
  NAVBAR_TWITCH,
} from '../../constants/constants';

import MailForm from '../../components/mailForm/mailForm';

import ChannelLive from '../../components/ChannelLive/ChannelLive';

import { Neumorphism } from '../../assets/styles/common.style';

import {
  H2,
  P,
  Italic,
  HighlightRect,
  HighlightLine,
} from '../../assets/styles/common.style';

function RightSide({ activeSection }) {
  const [t] = useTranslation();
  return (
    <>
      {activeSection === NAVBAR_ABOUT && (
        <Neumorphism>
          <H2>
            <b>{t('right.about.hello')}</b>
          </H2>
          <Italic>{t('right.about.job')}</Italic>
          <P>{t('right.about.part1')}</P>
          <P>
            {t('right.about.part3')}<HighlightRect>{t('right.about.part4')}</HighlightRect>{t('right.about.part5')}
          </P>
          <P>
            {t('right.about.part6')}<HighlightRect>{t('right.about.part7')}</HighlightRect>{t('right.about.part8')}
          </P>
          <P>
            {t('right.about.part9')}<HighlightRect>{t('right.about.part10')}</HighlightRect>{t('right.about.part11')}
          </P>
          <P>{t('right.about.part12')}</P>
          <P>
            <HighlightLine>{t('right.about.part13')}</HighlightLine>
          </P>
        </Neumorphism>
      )}
      {activeSection === NAVBAR_TWITCH && <ChannelLive channelId="256677231" />}
      {activeSection === NAVBAR_CONTACT && <MailForm />}
    </>
  );
}
export default RightSide;