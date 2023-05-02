import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import ChannelLive from 'components/ChannelLive/ChannelLive';
import Button from 'components/button/button';

import {
  H2,
  P,
  Italic,
  HighlightRect,
  HighlightLine,
  Section,
  AboutWrapper,
  Center,
} from './sides.style';

function RightSide() {
  const [t] = useTranslation();
  return (
    <>
      <Section id='about'>
        <AboutWrapper>
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
        </AboutWrapper>
      </Section>
      <Section id='twitch'>
        <ChannelLive channelId="256677231" />
      </Section>
      <Center>
        <Button label={t('button.contact')} />
      </Center>
    </>
  );
}
export default RightSide;