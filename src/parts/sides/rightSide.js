import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { MAIL_NAME } from 'constants/constants';

import ChannelLive from 'components/ChannelLive/ChannelLive';
import Button from 'components/button/button';
import Carrousel from 'components/carrousel/carrousel';

import { OBS_CARROUSEL_ITEMS } from 'data/obsCarrouselData';

import {
  H2,
  P,
  Legend,
  JumpLine,
  Italic,
  HighlightRect,
  HighlightLine,
  Section,
  ButtonWrapper,
  AboutWrapper,
  Center,
  ContactWrapper,
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
      <Section id='obs'>
      <AboutWrapper>
          <P>{t('right.obs.troubleOBS')}</P>
          <P>{t('right.obs.problem')}</P>
          <JumpLine />
          <P>{t('right.obs.experience')}</P>
          <JumpLine />
          <P>
            <Trans i18nKey="right.obs.cleanWorkingEnvironment" components={{ 1: <HighlightRect /> }} />
          </P>
          <P>
            <Trans i18nKey="right.obs.OBS" components={{ 1: <HighlightLine /> }} />
          </P>
          <P>
            <Trans i18nKey="right.obs.streamdeck" components={{ 1: <HighlightLine /> }} />
          </P>
          <P>
            <Trans i18nKey="right.obs.effect" components={{ 1: <HighlightLine /> }} />
          </P>
          <P>
            <Trans i18nKey="right.obs.botTwitch" components={{ 1: <HighlightLine /> }} />
          </P>
          <JumpLine />
          <P>
            <Trans i18nKey="right.obs.animations" components={{ 1: <HighlightRect /> }} />
          </P>
          <P><Trans i18nKey="right.obs.collabZaack" components={{ 1: <HighlightLine /> }} /></P>
          <JumpLine />
          <P>
            <Trans i18nKey="right.obs.imagination" components={{ 1: <HighlightLine /> }} />
          </P>
        </AboutWrapper>
        <ContactWrapper>
          <ButtonWrapper>
          <Button label={t('button.discord')} href="https://discord.com/users/270954271933988864"/>
          <Legend>{t('button.pseudo')}</Legend>
          </ButtonWrapper>
        </ContactWrapper>
        <Carrousel items={OBS_CARROUSEL_ITEMS}/>
      </Section>
      <Section id='twitch'>
        <ChannelLive channelId="256677231" />
      </Section>
      <Center>
        <Button label={t('button.contact')} href={'mailto:' + MAIL_NAME + '@gmail.com'}/>
      </Center>
    </>
  );
}
export default RightSide;