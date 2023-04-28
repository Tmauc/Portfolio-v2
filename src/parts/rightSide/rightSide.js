import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import MailForm from 'components/mailForm/mailForm';

import ChannelLive from 'components/ChannelLive/ChannelLive';

import {
  NAVBAR_ABOUT,
  NAVBAR_CONTACT,
  NAVBAR_TWITCH,
} from 'constants/constants';

import {
  H2,
  P,
  Italic,
  HighlightRect,
  HighlightLine,
  Neumorphism,
} from 'assets/styles/common.style';

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
          <P>{t('right.about.startContent')}</P>
          <P>
            <Trans i18nKey="right.about.streamBroadcasts" components={{ 1: <HighlightRect /> }} />
          </P>
          <P>
            <Trans i18nKey="right.about.videosCreation" components={{ 1: <HighlightRect /> }} />
          </P>
          <P>
            <Trans i18nKey="right.about.podcastPublications" components={{ 1: <HighlightRect /> }} />
          </P>
          <P>{t('right.about.photographer')}</P>
          <P>
            <HighlightLine>{t('right.about.joinCommunity')}</HighlightLine>
          </P>
        </Neumorphism>
      )}
      {activeSection === NAVBAR_TWITCH && <ChannelLive channelId="256677231" />}
      {activeSection === NAVBAR_CONTACT && <MailForm />}
    </>
  );
}
export default RightSide;